import { Router } from 'express';
import * as itemController from '../controllers/itemController';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { itemSchema } from '../schemas/itemSchema';

const itemRouter = Router();

itemRouter.get('/items', itemController.get);
itemRouter.get('/items/:id', itemController.getById);

itemRouter.post(
  '/items',
  validateSchemaMiddleware(itemSchema),
  itemController.create
);

export default itemRouter;
