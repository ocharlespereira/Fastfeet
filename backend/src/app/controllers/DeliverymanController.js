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

    // retorna campos do usuário - (colunas)
    const { id, name, email, avatar_id } = await Deliveryman.create(req.body);

    // retorna objeto com dados setados acima
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

    const { id } = req.params;

    const develiveryId = await Deliveryman.findByPk(id);

    const { name, email, avatar_id } = await develiveryId.update(req.body);

    return res.json({
      id,
      name,
      email,
      avatar_id,
    });
  }

  async delete(req, res) {
    const develivery = await Deliveryman.findByPk(req.params.id, {
      attributes: ['id', 'name', 'email'],
    });

    await develivery.destroy();

    return res.json(develivery);
  }
}

export default new DeliverymanController();
