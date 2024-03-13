import { AppDataSource } from "../data-source";
import { Item } from "../entity/Item";

export const itemRepository = AppDataSource.getRepository(Item);