// import { startOfHour, endOfHour, parseISO, isBefore } from 'date-fns';

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
      /* include: [
        {
          model: Order,
          as: 'order',
          attributes: [
            'id',
            'product',
            'start_date',
            'end_date',
            'signature_id',
          ],
        },
      ], */
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
}
export default new ProblemController();
