import { Op } from 'sequelize';

import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature';

class DeliveriesController {
  async index(req, res) {
    const { page } = req.query;

    const { id } = req.params;
    const checkDelivery = await Deliveryman.findByPk(id);

    if (!checkDelivery) {
      return res
        .status(401)
        .json({ error: 'Deliveryman is not a registration.' });
    }

    const orders = await Order.findAll({
      include: [
        {
          model: Signature,
          as: 'signature',
          attributes: ['id', 'path', 'url'],
        },
      ],
      limit: 20,
      offset: (page - 1) * 20,
      where: {
        deliveryman_id: id,
        canceled_at: null,
        end_date: { [Op.ne]: null }, // diferente de null
      },
      order: [['id', 'DESC']],
    });

    return res.json(orders);
  }
}

export default new DeliveriesController();
