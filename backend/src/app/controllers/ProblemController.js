import { Op } from 'sequelize';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import * as Yup from 'yup';

import Order from '../models/Order';
import Problem from '../models/Problem';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import Signature from '../models/Signature';
import Notification from '../schemas/Notification';

import CancelOrderMail from '../jobs/CancelOrderMail';
import Queue from '../../lib/Queue';

class ProblemController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const problem = await Problem.findAll({
      limit: 10,
      offset: (page - 1) * 10,
    });

    return res.json(problem);
  }

  async show(req, res) {
    const { id } = req.params;
    /**
     * Verifica se existe Ordem de entrega cadastrado
     */
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(400).json({ error: 'Order already not exists.' });
    }

    /**
     * Verifica se existe a notificação cadastrado
     */
    const problem = await Problem.findOne({
      where: { delivery_id: id },
    });

    if (!problem) {
      return res.status(400).json({ error: 'Problem already not exists.' });
    }

    return res.json(problem);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    /**
     * Verifica se existe Ordem de entrega cadastrado
     */
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(400).json({ error: 'Delivery does not exist.' });
    }

    /**
     * Verifica se existe a notificação cadastrado
     */
    const problemExist = await Problem.findOne({
      where: { delivery_id: id },
    });

    if (problemExist) {
      return res.status(400).json({ error: 'Problem already reported!' });
    }

    const { description } = req.body;

    const problem = await Problem.create({
      delivery_id: id,
      description,
    });

    return res.json(problem);
  }

  async delete(req, res) {
    /**
     * Verifica se existe Ordem de entrega cadastrado
     */
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(400).json({ error: 'Delivery does not exist.' });
    }

    /**
     * Verifica se existe a notificação cadastrado
     */
    const problemExist = await Problem.findOne({
      where: { delivery_id: id },
    });

    if (!problemExist) {
      return res.status(400).json({ error: 'Problem does not exists!' });
    }

    /**
     * Cancela a entrega e atualiza o campo canceled_at para a data atual
     */
    const orderCancel = await Order.findByPk(id, {
      include: [
        {
          model: Signature,
          as: 'signature',
          attributes: ['id', 'path', 'url'],
        },
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
            'zip_code',
          ],
        },
      ],
      where: {
        // id: id,
        canceled_at: null,
        start_date: { [Op.ne]: null },
      },
    });

    /**
     * Salva data de cancelamento
     */
    // if (orderCancel) {
    //   orderCancel.canceled_at = new Date();
    //   orderCancel.status = 'CANCELADA';
    //   await orderCancel.save();
    // }

    await orderCancel.update({ canceled_at: new Date(), status: 'CANCELADA' });

    /**
     * Notificar deliveryman
     */
    const delivery = await Deliveryman.findByPk(orderCancel.deliveryman_id);

    const parseDate = orderCancel.canceled_at;

    const formattedDate = format(
      parseDate,
      "'dia' dd 'de' MMMM 'de' yyyy', às' H:mm'h.'",
      { locale: pt }
    );

    await Notification.create({
      content:
        `Prezado ${delivery.name} o cancelamento correspondente a entrega ` +
        `${orderCancel.delivery_id} encontra-se com status cancelado no ${formattedDate}`,
      deliveryman: orderCancel.deliveryman_id,
    });

    /**
     * Envio de email
     */
    const addressRecipient = `${orderCancel.recipient.street},
                              ${orderCancel.recipient.number},
                              ${orderCancel.recipient.zip_code},
                              ${orderCancel.recipient.complement},
                              ${orderCancel.recipient.city}-
                              ${orderCancel.recipient.state}`;

    // chamada queue de filas
    await Queue.add(CancelOrderMail.key, {
      delivery,
      orderCancel,
      recipientName: orderCancel.recipient.name,
      addressRecipient,
      formattedDate,
    });

    return res.status(200).json(orderCancel);
  }
}
export default new ProblemController();
