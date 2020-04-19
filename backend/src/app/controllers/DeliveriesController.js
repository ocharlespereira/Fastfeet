import { Op } from 'sequelize';

import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import File from '../models/File';

class DeliveriesController {
  async index(req, res) {
    const { page } = req.query;

    const { id: deliverymanId } = req.params;
    const checkDelivery = await Deliveryman.findByPk(deliverymanId);

    if (!checkDelivery) {
      return res.status(401).json({ error: 'Deliveryman is not exists.' });
    }

    const orders = await Order.findAll({
      where: {
        signature_id: { [Op.not]: null }, // diferente de null, entregas realizadas
        deliveryman_id: deliverymanId,
      },
      attributes: [
        'id',
        'deliveryman_id',
        'product',
        'status',
        'start_date',
        'end_date',
        'canceled_at',
      ],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'state',
            'city',
            'street',
            'number',
            'complement',
            'zip_code',
          ],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'url', 'path'],
        },
      ],
      order: [['id', 'DESC']],
    });
    return res.json(orders);
  }

  async update(req, res) {
    const { id: deliverymanId, orderId } = req.params;

    /*
     * Verifica se existe o entregador
     */
    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Delivery man does not exists' });
    }

    /*
     * Verifica se existe a ordem de entrega para o entregador
     */
    const order = await Order.findOne({
      where: {
        id: orderId,
        start_date: { [Op.not]: null }, // diferente de null
        signature_id: null,
      },
    });

    if (!order) {
      return res.status(400).json({ error: 'Order does not exists' });
    }

    const { signature_id } = req.body;

    const signatureImage = await File.findByPk(signature_id);

    if (!signatureImage) {
      return res.status(400).json({ error: 'Signature image does not exists' });
    }

    await order.update({
      end_date: new Date(),
      signature_id,
      status: 'ENTREGUE',
    });

    return res.json({});
  }
}

export default new DeliveriesController();
