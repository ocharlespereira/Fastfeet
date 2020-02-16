// import { startOfHour, endOfHour, parseISO, isBefore } from 'date-fns';

import Order from '../models/Order';
import Problem from '../models/Problem';
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature';
import File from '../models/File';

class ProblemController {
  async index(req, res) {
    // paginação
    const { page = 1 } = req.query;

    const { id } = req.params;

    const problem = await Problem.findByPk(id, {
      attributes: ['delivery_id', 'description'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Order,
          as: 'order',
          attributes: ['id', 'product', 'start_date', 'end_date'],
          include: [
            {
              model: Signature,
              as: 'signature',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });

    return res.json(problem);
  }
}
export default new ProblemController();
