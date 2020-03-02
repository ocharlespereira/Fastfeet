import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import SignatureController from './app/controllers/SignatureController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveriesController from './app/controllers/DeliveriesController';
import OrderController from './app/controllers/OrderController';
import DeliveryOrdersController from './app/controllers/DeliveryOrdersController';
import ProblemController from './app/controllers/ProblemController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/signatures', upload.single('file'), SignatureController.store);

/**
 * Entregador verifica as ordens em aberto
 */
routes.get('/delivery/:id/orders', DeliveryOrdersController.index);
routes.put('/delivery/:id/orders/:idOrder', DeliveryOrdersController.update);
routes.put('/delivered/:id/orders/:idOrder', DeliveryOrdersController.show);

/**
 * Entregas realizadas pelos entregadores
 */
routes.get('/deliveryman/:id/deliveries', DeliveriesController.index);

/**
 * Problemas nas Entregas
 */

routes.get('/delivery/:idOrder/problems', ProblemController.index);
routes.post('/delivery/:idOrder/problems', ProblemController.store);

/**
 * Acesso a Usuários autenticados (Admins)
 */
routes.use(authMiddleware);

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:id', RecipientController.show);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/deliverymans', DeliverymanController.index);
routes.get('/deliverymans/:id', DeliverymanController.show);
routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans/:id', DeliverymanController.update);
routes.delete('/deliverymans/:id', DeliverymanController.delete);

routes.get('/orders', OrderController.index);
routes.get('/orders/:id', OrderController.show);
routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);
routes.delete('/orders/:id', OrderController.delete);

/**
 * Cancelamento de entrega com problema.
 */
routes.delete('/problem/:idOrder/cancel-delivery', ProblemController.delete);

export default routes;
