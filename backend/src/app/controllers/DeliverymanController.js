/* eslint-disable prettier/prettier */
import * as Yup from 'yup';
import { Op } from 'sequelize';

import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async show(req, res) {
    const { id } = req.params;

    const deliveryman = await Deliveryman.findByPk(id, {
      attributes: ['id', 'name', 'email'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    return res.json(deliveryman);
  }

  async index(req, res) {
    const { page = 1, nameLike } = req.query;

    const delivery = nameLike
      ? await Deliveryman.findAll({
        attributes: ['id', 'name', 'email', 'avatar_id'],
        limit: 8,
        offset: (page - 1) * 8,
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['id', 'path', 'url'],
          },
        ],
        where: {
          name: {
            [Op.iLike]: `%${nameLike}%`,
          },
        },
        order: [['id', 'ASC']],
      })
      : await Deliveryman.findAll({
        attributes: ['id', 'name', 'email', 'avatar_id'],
        limit: 8,
        offset: (page - 1) * 8,
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['id', 'path', 'url'],
          },
        ],
        order: [['id', 'ASC']],
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

    /**
     * Notificar deliveryman
     */

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
