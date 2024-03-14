import { Request, Response } from "express";
import { itemRepository } from "../repositories/itemRepository";

export class ItemController {

  async createItem(req: Request, res: Response) {
    const { category, value, type } = req.body;

    if (!category) return res.status(400).json('Descrição é obrigatória!');

    try {
      const newItem = itemRepository.create({ category, value, type });
      await itemRepository.save(newItem);
      return res.status(201).json(newItem);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getItems(req: Request, res: Response) {
    try {
      const items = await itemRepository.find();
      return res.json(items);
    } catch (err) {
      return res.status(400).json({ message: 'Items not found', err });
    }
  }

  async updateItem(req: Request, res: Response) {
    const { category, value, type } = req.body;

    try {
      await itemRepository.update(req.params.id, { category, value, type });
      return res.json(req.body);
    } catch (err) {
      return res.status(400).json({message: 'Error trying to update item', err});
    }
  }

  async deleteItem(req: Request, res: Response) {
    try {
      const deletedItem = await itemRepository.delete(req.params.id);
      res.send('Successfully deleted item');
    } catch (err) {
      return res.status(400).json({message: err});
    }
  }

}