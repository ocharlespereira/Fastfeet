import { Op } from 'sequelize';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

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
    // paginação
    // const { page = 1 } = req.query;

    const { idOrder } = req.params;
    /**
     * Verifica se existe Ordem de entrega cadastrado
     */
    const order = await Order.findOne({ where: { id: idOrder } });

    if (!order) {
      return res.status(400).json({ error: 'Order already not exists.' });
    }

    /**
     * Verifica se existe a notificação cadastrado
     */
    const problemExist = await Problem.findOne({
      where: { delivery_id: idOrder },
    });

    if (!problemExist) {
      return res.status(400).json({ error: 'Problem already not exists.' });
    }

    const problem = await Problem.findOne({
      attributes: ['delivery_id', 'description'],
      where: {
        delivery_id: idOrder,
      },
    });

    return res.json(problem);
  }

  async store(req, res) {
    const { idOrder } = req.params;
    /**
     * Verifica se existe Ordem de entrega cadastrado
     */
    const order = await Order.findOne({ where: { id: idOrder } });

    if (!order) {
      return res.status(400).json({ error: 'Order already not exists.' });
    }

    /**
     * Verifica se existe a notificação cadastrado
     */
    const problemExist = await Problem.findOne({
      where: { delivery_id: idOrder },
    });

    if (!problemExist) {
      return res.status(400).json({ error: 'Problem already not exists.' });
    }

    const { id, description } = req.body;

    const problem = await Problem.create({
      id,
      delivery_id: idOrder,
      description,
    });

    return res.json(problem);
  }

  async delete(req, res) {
    const { idOrder } = req.params;
    /**
     * Verifica se existe Ordem de entrega cadastrado
     */
    const order = await Order.findOne({ where: { id: idOrder } });

    if (!order) {
      return res.status(400).json({ error: 'Order already not exists.' });
    }

    /**
     * Verifica se existe a notificação cadastrado
     */
    const problemExist = await Problem.findOne({
      where: { delivery_id: idOrder },
    });

    if (!problemExist) {
      return res.status(400).json({ error: 'Problem already not exists.' });
    }

    /**
     * Cancela a entrega e atualiza o campo canceled_at para a data atual
     */
    const orderCancel = await Order.findByPk(idOrder, {
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
            'cep',
          ],
        },
      ],
      where: {
        id: idOrder,
        canceled_at: null,
        start_date: { [Op.ne]: null },
      },
    });

    /**
     * Salva data de cancelamento
     */
    if (orderCancel) {
      orderCancel.canceled_at = new Date();
      await orderCancel.save();
    }

    /**
     * Notificar deliveryman
     */
    const delivery = await Deliveryman.findByPk(orderCancel.deliveryman_id);

    // const parseDate = subHours(parseISO(orderDate.created_at), 3);
    const parseDate = orderCancel.canceled_at;

    const formattedDate = format(
      parseDate,
      "'dia' dd 'de' MMMM 'de' yyyy', às' H:mm'h.'",
      { locale: pt }
    );

    await Notification.create({
      content:
        `Prezado ${delivery.name} o cancelamento correspondente a entrega ` +
        `${orderCancel.id} encontra-se com status cancelado no ${formattedDate}`,
      deliveryman: orderCancel.deliveryman_id,
    });

    /**
     * Envio de email
     */
    const addressRecipient = `${orderCancel.recipient.street}, 
                              ${orderCancel.recipient.number}, 
                              ${orderCancel.recipient.cep}, 
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
