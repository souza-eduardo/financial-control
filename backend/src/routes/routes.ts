import { ItemController } from "../controller/itemController";
import { Router } from "express";
const routes = Router();

routes.post('/items', new ItemController().createItem);
routes.get('/items', new ItemController().getItems);
routes.put('/items/:id', new ItemController().updateItem);
routes.delete('/items/:id', new ItemController().deleteItem);

export default routes;