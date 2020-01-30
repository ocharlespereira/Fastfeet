import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    // retorna campos do usuário - (colunas)
    const { id, name, email } = await User.create(req.body);

    // retorna objeto com dados setados acima
    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
