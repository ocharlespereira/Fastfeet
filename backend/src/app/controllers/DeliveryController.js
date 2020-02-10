// import * as Yup from 'yup';
import { startOfHour, parseISO, getHours } from 'date-fns';
// import { Op } from 'sequelize';

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

class DeliveryController {
  async index(req, res) {
    const { id } = req.params;
    const checkDelivery = await Deliveryman.findByPk(id);

    if (!checkDelivery) {
      return res
        .status(401)
        .json({ error: 'Deliveryman is not a registration.' });
    }

    const orders = await Order.findAll({
      where: {
        deliveryman_id: id,
        canceled_at: null,
        end_date: null,
      },
    });

    return res.json(orders);
  }

  async update(req, res) {
    const { id } = req.params;
    const checkDelivery = await Deliveryman.findByPk(id);

    if (!checkDelivery) {
      return res
        .status(401)
        .json({ error: 'Deliveryman is not a registration.' });
    }

    /**
     * Verifica se o entregador está no prazo entre as 08:00 e s 18:0.
     */
    const { start_date, end_date, signature_id, recipient_id } = req.body;

    // convert a data em apenas horas com o startOfHours
    const parseDate = startOfHour(parseISO(start_date));

    // aplico o getHours para trazer apenas a hora para a condição
    if (
      getHours(parseISO(start_date)) < '08' ||
      getHours(parseISO(start_date)) > '18'
    ) {
      return res
        .status(400)
        .json({ error: 'Products can be picked up between 08:00 and 18:00.' });
    }

    console.log(parseDate);

    /**
     * Busca ordens em aberto para entrega
     */
    const orders = await Order.findAll({
      where: {
        deliveryman_id: id,
        canceled_at: null,
        start_date: null,
      },
    });

    return res.json(orders);
  }

  /* const order = await Order.findAll({
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
    }); */
}

export default new DeliveryController();
