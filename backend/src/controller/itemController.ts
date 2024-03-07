import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Item } from "../entity/Item";
import { itemRepository } from "../repositories/itemRepository";

export class ItemController {

  async getItem (req: Request, res: Response) {
    const item = await itemRepository.find();
    res.json(item);
  }
  
  async createItem (req: Request, res: Response) {
    const { category, description, value, type } = req.body;
  
    
  }
}
