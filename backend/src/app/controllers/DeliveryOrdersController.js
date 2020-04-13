import { parseISO, isBefore, setHours, isAfter } from 'date-fns';
import * as Yup from 'yup';

import Order from '../models/Order';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';
import Signature from '../models/Signature';

/**
 * O que o Entregador pode fazer é:
 * GET - verificar encomendas vinculadas ao seu ID
 * PUT - fazer retiradas, apenas 5 no dia das 08:00 as 18:00
 *        automaticamente o campo start_date é preenchido
 * Criar Controller especifico para entregadores chamado: Delivery
 */

class DeliveryOrdersController {
  async index(req, res) {
    const { id: deliverymanId } = req.params;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const deliveries = await Order.findAll({
      where: {
        deliveryman_id: deliverymanId,
        signature_id: null,
        canceled_at: null,
      },
      order: ['id'],
      attributes: [
        'id',
        'deliveryman_id',
        'product',
        'status',
        'start_date',
        'end_date',
        'created_at',
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
    });

    return res.json(deliveries);
  }

  async show(req, res) {
    const { id } = req.params;

    const deliveryman = await Deliveryman.findByPk(id, {
      attributes: ['id', 'name', 'email', 'created_at'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!deliveryman) {
      return res.status(400).json({ error: 'Delivery man does not exists' });
    }

    return res.json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const { id: deliverymanId, orderId: deliveryId } = req.params;

    /*
     * Verifique se o entregador existe
     */
    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Delivery man does not exists' });
    }

    /*
     * Verifique se o pedido existe
     */
    const order = await Order.findByPk(deliveryId);

    if (!order) {
      return res.status(400).json({ error: 'Delivery does not exists' });
    }

    const { count } = await Order.findAndCountAll({
      where: {
        deliveryman_id: deliverymanId,
        start_date: null,
        signature_id: null,
      },
    });

    if (count === 5) {
      return res
        .status(400)
        .json({ error: 'Maximum number of withdrawals reached' });
    }

    const { start_date } = req.body;
    const start_date_ISO = parseISO(start_date);

    if (
      isBefore(start_date_ISO, setHours(new Date(), 8)) ||
      isAfter(start_date_ISO, setHours(new Date()), 7)
    ) {
      return res.status(400).json({ error: 'Invalid time' });
    }

    await order.update({ start_date, status: 'RETIRADA' });

    return res.json({});
  }
}
export default new DeliveryOrdersController();
