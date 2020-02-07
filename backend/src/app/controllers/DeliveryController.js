import * as Yup from 'yup';
import { startOfHour, endOfHour, parseISO, isBefore } from 'date-fns';

import Order from '../models/Order';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature';

/**
 * O que o Entregador pode fazer é:
 * GET - verificar encomendas vinculadas ao seu ID
 * PUT - fazer retiradas, apenas 5 no dia das 08:00 as 18:00
 *        automaticamente o campo start_date é preenchido
 * Criar Controller especifico para entregadores chamado: Delivery
 */

class OrderController {
  async index(req, res) {
    const order = await Order.findAll({
      attributes: [
        'name',
        'email',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
      ],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'street',
            'number',
            'complement',
            'city',
            'state',
            'cep',
          ],
        },
        {
          model: Deliveryman,
          as: 'recipient',
          attributes: ['id', 'name', 'email', 'avatar_id'],
        },
        {
          model: Signature,
          as: 'signature',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(order);
  }

  async update(req, res) {
    const { id } = req.params;

    const orderId = await Order.findByPk(id);

    const {
      name,
      email,
      product,
      canceled_at,
      start_date,
      end_date,
    } = await orderId.update(req.body);

    return res.json({
      name,
      email,
      product,
      canceled_at,
      start_date,
      end_date,
    });
  }