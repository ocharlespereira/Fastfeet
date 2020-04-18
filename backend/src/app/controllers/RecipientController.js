/* eslint-disable prettier/prettier */
import * as Yup from 'yup';
import { Op } from 'sequelize';

import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { page = 1, nameLike } = req.query;

    const recipient = nameLike
      ? await Recipient.findAll({
        attributes: [
          'id',
          'name',
          'street',
          'number',
          'complement',
          'city',
          'state',
          'zip_code',
        ],
        limit: 8,
        offset: (page - 1) * 8,
        where: {
          name: {
            [Op.iLike]: `%${nameLike}%`,
          },
        },
        order: [['name', 'ASC']],
      })
      : await Recipient.findAll({
        attributes: [
          'id',
          'name',
          'street',
          'number',
          'complement',
          'city',
          'state',
          'zip_code',
        ],
        limit: 8,
        offset: (page - 1) * 8,
        order: [['name', 'ASC']],
      });

    return res.json(recipient);
  }

  async show(req, res) {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id, {
      attributes: [
        'id',
        'name',
        'street',
        'number',
        'complement',
        'state',
        'city',
        'zip_code',
      ],
    });

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    return res.json(recipient);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      zip_code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    // const { name } = req.body;

    // const recipientExists = await Recipient.findOne({
    //   where: { name },
    //   order: ['name'],
    // });

    // if (recipientExists) {
    //   return res.status(400).json({ error: 'Recipient already exists.' });
    // }

    const {
      name,
      street,
      number,
      complement,
      city,
      state,
      zip_code,
    } = await Recipient.create(req.body);

    return res.json({
      name,
      street,
      number,
      complement,
      city,
      state,
      zip_code,
    });
  }

  async update(req, res) {
    const { id } = req.params;

    const recipientId = await Recipient.findByPk(id);

    const {
      name,
      street,
      number,
      complement,
      city,
      state,
      zip_code,
    } = await recipientId.update(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      city,
      state,
      zip_code,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const recipientExist = await Recipient.findByPk(id);

    if (!recipientExist) {
      return res
        .status(400)
        .json({ error: 'Recipient not exists for delete.' });
    }

    const recipient = await Recipient.findByPk(id, {
      attributes: [
        'id',
        'name',
        'street',
        'number',
        'complement',
        'city',
        'state',
        'zip_code',
      ],
    });

    await recipient.destroy();

    return res.json(recipient);
  }
}

export default new RecipientController();
