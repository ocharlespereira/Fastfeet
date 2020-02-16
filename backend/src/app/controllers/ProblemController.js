import { Op } from 'sequelize';

import Order from '../models/Order';
import Problem from '../models/Problem';
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature';
import File from '../models/File';

class ProblemController {
  async index(req, res) {
    // paginação
    // const { page = 1 } = req.query;

    const { idOrder } = req.params;

    const order = await Order.findByPk(idOrder);

    if (!order) {
      return res.status(400).json({ error: 'Order already not exists.' });
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

    const order = await Order.findOne({ where: { id: idOrder } });

    if (!order) {
      return res.status(400).json({ error: 'Order already not exists.' });
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

    const order = await Order.findOne({ where: { id: idOrder } });

    if (!order) {
      return res.status(400).json({ error: 'Order already not exists.' });
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
      ],
      where: {
        id: idOrder,
        canceled_at: null,
        start_date: { [Op.ne]: null },
      },
    });

    if (orderCancel) {
      orderCancel.canceled_at = new Date();
      await orderCancel.save();
    }

    return res.status(200).json(orderCancel);
  }
}
export default new ProblemController();
