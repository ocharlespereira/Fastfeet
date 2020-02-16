// import * as Yup from 'yup';
import { parseISO, getHours, subHours, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';

import Order from '../models/Order';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature';

class DeliveriesController {
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
        start_date: { [Op.ne]: null }, // diferente de null
      },
      order: [['id', 'DESC']],
    });

    return res.json(orders);
  }
}

export default new DeliveriesController();
