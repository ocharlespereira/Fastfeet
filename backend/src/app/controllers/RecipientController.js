import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const { id } = req.body;

    const recipient = await Recipient.findAll(id);

    return res.json(recipient);
  }
}

export default new RecipientController();
