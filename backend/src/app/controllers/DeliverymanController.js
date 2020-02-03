import * as Yup from 'yup';

import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async index(req, res) {
    const delivery = await Deliveryman.findAll({
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(delivery);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { id, email } = req.body;

    const deliveryExists = await Deliveryman.findOne({ where: { email } });

    if (deliveryExists) {
      return res.status(400).json({ error: 'Delivery email already exists.' });
    }

    const { name, avatar_id } = await Deliveryman.create(req.body);

    return res.json({
      id,
      name,
      email,
      avatar_id,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { email } = req.body;

    const deliveryEmailExists = await Deliveryman.findOne({ where: { email } });

    if (deliveryEmailExists) {
      return res.status(400).json({ error: 'Delivery email already exists.' });
    }

    const { id } = req.params;

    const deliveryID = await Deliveryman.findByPk(id);

    const { name, avatar_id } = await deliveryID.update(req.body);

    return res.json({
      id,
      name,
      email,
      avatar_id,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const deliveryExist = await Deliveryman.findByPk(id);

    if (!deliveryExist) {
      return res
        .status(400)
        .json({ error: 'Deliveryman not exists for delete.' });
    }

    const develivery = await Deliveryman.findByPk(id, {
      attributes: ['id', 'name', 'email'],
    });

    await develivery.destroy();

    return res.json(develivery);
  }
}

export default new DeliverymanController();
