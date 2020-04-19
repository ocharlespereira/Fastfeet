import { parseISO, startOfDay, getHours, endOfDay, subHours } from 'date-fns';
import { Op } from 'sequelize';
import * as Yup from 'yup';

import Order from '../models/Order';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

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
          model: File,
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
    /**
     * Verifica se o entregador está no prazo entre as 08:00 e s 18:00.
     */
    const { start_date } = req.body;
    // convert a data em apenas horas com o decrescimo de 3 horas subHours
    const parseDate = subHours(parseISO(start_date), 3);
    // convert a data em apenas horas com o acrescimo de 3 horas
    if (getHours(parseDate) + 3 <= '08' || getHours(parseDate) + 3 >= '18') {
      return res
        .status(400)
        .json({ error: 'Products can be picked up between 08:00 and 18:00.' });
    }
    /**
     * Verifica se o entregador já fez mais de 5 retiradas no dia
     */
    const countOrderDay = await Order.findAndCountAll({
      where: {
        start_date: {
          [Op.between]: [startOfDay(parseDate), endOfDay(parseDate)],
        },
        canceled_at: null,
        deliveryman_id: req.params.id,
      },
    });
    if (countOrderDay.count >= 5) {
      return res
        .status(400)
        .json({ error: 'Only 5 retirees are allowed per delivery person.' });
    }
    /**
     * Busca ordens em aberto para entrega que não estejam canceladas
     */
    const { orderId } = req.params;
    const orderExist = await Order.findByPk(orderId, {
      where: {
        deliveryman_id: req.params.id,
        canceled_at: null,
        start_date: null,
      },
    });
    if (!orderExist) {
      return res
        .status(400)
        .json({ error: 'Order already exists for deliveryman.' });
    }
    const {
      deliveryman_id,
      recipient_id,
      signature_id,
      canceled_at,
    } = await orderExist.update({ start_date, status: 'RETIRADA' });
    return res.json({
      deliveryman_id,
      recipient_id,
      start_date,
      signature_id,
      canceled_at,
    });
  }
}
export default new DeliveryOrdersController();
