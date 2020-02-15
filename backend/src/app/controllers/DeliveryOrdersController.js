// import * as Yup from 'yup';
import { parseISO, getHours, subHours, startOfDay, endOfDay } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { Op, fn, col } from 'sequelize';

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
    /**
     * Verifica se o entregador está no prazo entre as 08:00 e s 18:00.
     */
    const { start_date } = req.body;

    // convert a data em apenas horas com o decrescimo de 2 horas subHours
    const parseDate = subHours(parseISO(start_date), 3);

    const parseDate1 = parseISO(start_date);
    const znDate = zonedTimeToUtc(parseDate1, 'America/Sao_Paulo');

    console.log(startOfDay(znDate));
    console.log(parseDate);

    // convert a data em apenas horas com o acrescimo de 2 horas
    if (getHours(parseDate) + 2 <= '08' || getHours(parseDate) + 2 >= '18') {
      return res
        .status(400)
        .json({ error: 'Products can be picked up between 08:00 and 18:00.' });
    }

    // return res.json(parseDate);

    /**
     * Verifica a quantidade de retiras no dia, não pode ser mais que 5
     */

    // if (getHours(parseDate) + 2 <= '08' || getHours(parseDate) + 2 >= '18') {
    // /colocar aquia  validação
    // }

    const dateDay = new Date();
    // const dateDay = subHours(parseISO(dateDay1), 2);

    /* const countOrderDay = await Order.findAll({
      attributes: [[fn('count', col('start_date')), 'countOrder']],
      where: {
        start_date: {
          [Op.between]: [startOfDay(parseDate), endOfDay(parseDate)],
        },
        deliveryman_id: req.params.id,
      },
      // raw: true, // traz somente o resultado
    }); */

    const countOrderDay = await Order.findAndCountAll({
      where: {
        start_date: {
          [Op.between]: [startOfDay(parseDate), endOfDay(parseDate)],
        },
        deliveryman_id: req.params.id,
      },
    });

    if (countOrderDay.count > 5) {
      return res
        .status(400)
        .json({ error: 'Only 5 retirees are allowed per delivery person.' });
    }

    // console.log(dateDay);
    console.log(countOrderDay.count);

    // const dateD = Date(parseISO('yyyy-MM-dd'));
    // console.log(dateD);

    /**
     * Busca ordens em aberto para entrega que não estejam canceladas
     */
    const { idOrder } = req.params;
    const orderExist = await Order.findByPk(idOrder, {
      where: {
        deliveryman_id: req.params.id,
        canceled_at: null,
        start_date: null,
      },
    });

    if (!orderExist) {
      return res
        .status(400)
        .json({ error: 'Order already exists for deliveryman.' });
    }

    const {
      deliveryman_id,
      recipient_id,
      end_date,
      signature_id,
      canceled_at,
    } = await orderExist.update(req.body);

    return res.json({
      deliveryman_id,
      recipient_id,
      start_date,
      end_date,
      signature_id,
      canceled_at,
    });
  }
}
export default new DeliveryOrdersController();
