import Signature from "../models/Signature";

export default async (req, res, next) {
  const { signature_id } = req.body;

  if (signature_id) {
    const file = await Signature.findByPk(signature_id);

    if (!file) {
      return res.status(400).json({ error: "Invalid file." })
    }
  }

  return next();
}
