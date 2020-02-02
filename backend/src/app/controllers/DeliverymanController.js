import * as Yup from 'yup';

import Deliveryman from '../models/Deliveryman';
// import File from '../models/File';

class DeliverymanController {
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
}

export default new DeliverymanController();
