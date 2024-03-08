import { ItemController } from "../controller/itemController";
import { Router } from "express";
const routes = Router();
routes.post('/items', new ItemController().createItem);
routes.get('/items', new ItemController().getItem);

export default routes;