import * as Yup from 'yup';
import { startOfHour, endOfHour, parseISO, isBefore } from 'date-fns';

import Order from '../models/Order';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature';

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

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .required()
        .email(),
      product: Yup.number(),
      canceled_at: Yup.date(),
      start_date: Yup.date(),
      end_date: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { id } = req.body;

    const OrderExists = await Order.findOne({ where: { id } });

    if (OrderExists) {
      return res.status(400).json({ error: 'Order already exists.' });
    }

    const startHour = startOfHour(parseISO(date)); // 08:00

    if (isBefore(startHour, new Date())) {
      res.status(400).json({ error: 'Past date are not permited.' });
    }

    const {
      name,
      email,
      product,
      canceled_at,
      start_date,
      end_date,
    } = await Order.create(req.body);

    return res.json({
      id,
      name,
      email,
      product,
      canceled_at,
      start_date,
      end_date,
    });
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

  async delete(req, res) {
    const { id } = req.params;

    const orderExist = await Order.findByPk(id);

    if (!orderExist) {
      return res.status(400).json({ error: 'Order not exists for delete.' });
    }

    const order = await Order.findByPk(id, {
      attributes: [
        'id',
        'name',
        'email',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
      ],
    });

    await order.destroy();

    return res.json(order);
  }
}

export default new OrderController();
