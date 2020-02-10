// import * as Yup from 'yup';
import { startOfHour, parseISO, getHours } from 'date-fns';
// import { Op } from 'sequelize';

import Order from '../models/Order';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import Signature from '../models/Signature';

/**
 * O que o Entregador pode fazer é:
 * GET - verificar encomendas vinculadas ao seu ID
 * PUT - fazer retiradas, apenas 5 no dia das 08:00 as 18:00
 *        automaticamente o campo start_date é preenchido
 * Criar Controller especifico para entregadores chamado: Delivery
 */

class DeliveryOrdersController {
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
        end_date: null,
      },
    });

    return res.json(orders);
  }

  async update(req, res) {
    const { id } = req.params;

    /**
     * Verifica se o entregador está no prazo entre as 08:00 e s 18:0.
     */
    const { start_date } = req.body;

    // convert a data em apenas horas com o startOfHours
    const parseDate = startOfHour(parseISO(start_date));

    // aplico o getHours para trazer apenas a hora para a condição
    if (
      getHours(parseISO(parseDate)) < '08' ||
      getHours(parseISO(parseDate)) > '18'
    ) {
      return res
        .status(400)
        .json({ error: 'Products can be picked up between 08:00 and 18:00.' });
    }

    // console.log(parseDate);

    /**
     * Busca ordens em aberto para entrega que não estejam canceladas
     */
    const { idOrder } = req.params;

    const ordersId = await Order.findByPk(idOrder, {
      where: {
        deliveryman_id: req.params.id,
        canceled_at: null,
        start_date: null,
      },
    });

    const { end_date, signature_id, canceled_at } = await ordersId.update(
      req.body
    );

    console.log(id);

    return res.json({
      id: idOrder,
      deliveryman_id: id,
      recipient_id: ordersId.recipient_id,
      canceled_at,
      start_date,
      end_date,
      signature_id,
    });
  }
}
export default new DeliveryOrdersController();
