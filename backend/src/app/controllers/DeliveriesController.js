import { Op } from 'sequelize';

import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import Signature from '../models/Signature';

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
          model: Signature,
          as: 'signature',
          attributes: ['id', 'url', 'path'],
        },
      ],
      order: [['id', 'DESC']],
    });
    return res.json(orders);
  }
}

export default new DeliveriesController();
