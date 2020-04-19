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
    const { page = 1, q: nameLike } = req.query;

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
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.number().notRequired(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const { name, email, avatar_id } = req.body;

		/*
		 * Verifica se existe avatar_id
		 */
    if (avatar_id) {
      const avatarExists = await File.findByPk(avatar_id);

      if (!avatarExists) {
        return res.status(400).json({ error: 'File does not exists' });
      }
    }

		/*
		 * Verifica se existe entregador cadastrado no banco
		 */
    const { id } = req.params;

    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Delivery man does not exists' });
    }

		/*
		 * Verifica se existe o email já cadastrado
		 */
    if (email !== deliveryman.email) {
      const deliverymanExists = await Deliveryman.findOne({ where: { email } });

      if (deliverymanExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    await deliveryman.update({ name, email, avatar_id });

    const { avatar } = await Deliveryman.findByPk(id, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({ id, name, email, avatar });
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
