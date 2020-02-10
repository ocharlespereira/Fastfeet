import * as Yup from 'yup';
// import { startOfHour, endOfHour, parseISO, isBefore } from 'date-fns';

import Order from '../models/Order';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature';
import File from '../models/File';

class OrderController {
  async index(req, res) {
    const order = await Order.findAll({
      attributes: ['id', 'product', 'canceled_at', 'start_date', 'end_date'],
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
          as: 'deliveryman',
          attributes: ['id', 'name', 'email', 'avatar_id'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
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
      recipient_id: Yup.string().required(),
      deliveryman_id: Yup.string().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    // Verifica se o recipientId está cadastrado na tabela recipients
    const { recipient_id, deliveryman_id } = req.body;

    let recipient = null;

    if (recipient_id) {
      recipient = await Recipient.findByPk(recipient_id);

      if (!recipient) {
        return res.status(400).json({ error: 'Recipient not exists.' });
      }
    }

    // Verifica se o deliverymanId está cadastrado na tabela deliveryman
    let deliveryman = null;

    if (deliveryman_id) {
      deliveryman = await Deliveryman.findByPk(deliveryman_id);

      if (!deliveryman) {
        return res.status(400).json({ error: 'Deliveryman not exists.' });
      }
    }

    const { id, product } = await Order.create(req.body);

    return res.json({
      id,
      recipient_id,
      deliveryman_id,
      product,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.string().required(),
      deliveryman_id: Yup.string().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }
    const { id } = req.params;

    const orderExists = await Order.findOne({ where: { id } });

    if (!orderExists) {
      return res.status(400).json({ error: 'Order not exists.' });
    }

    // Verifica se o recipientId está cadastrado na tabela recipients
    const { recipient_id, deliveryman_id } = req.body;

    let recipient = null;

    if (recipient_id) {
      recipient = await Recipient.findByPk(recipient_id);

      if (!recipient) {
        return res.status(400).json({ error: 'Recipient not exists.' });
      }
    }

    // Verifica se o deliverymanId está cadastrado na tabela deliveryman
    let deliveryman = null;

    if (deliveryman_id) {
      deliveryman = await Deliveryman.findByPk(deliveryman_id);

      if (!deliveryman) {
        return res.status(400).json({ error: 'Deliveryman not exists.' });
      }
    }

    const orderId = await Order.findByPk(id);

    const { product } = await orderId.update(req.body);

    return res.json({
      id,
      recipient_id,
      deliveryman_id,
      product,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const orderExist = await Order.findByPk(id);

    if (!orderExist) {
      return res.status(400).json({ error: 'Order not exists for delete.' });
    }

    const order = await Order.findByPk(id, {
      attributes: ['id', 'recipient_id', 'deliveryman_id', 'product'],
    });

    await order.destroy();

    return res.json(order);
  }
}

export default new OrderController();
