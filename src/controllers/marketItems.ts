import { Request, Response } from 'express';

import MarketItemService from '../service/MarketItemService';

const marketItemService = new MarketItemService();

const createNewItem = async (req: Request, res: Response) => {
  const newItem = req.body;
  try {
    await marketItemService.create(newItem);
    res.send('Success: item posted');
  } catch (error) {
    const { name, message } = error as Error;
    res.status(400).send({ name, message });
  }
};

const getItems = async (req: Request, res: Response) => {
  const user = req.query.user as string;
  try {
    if (user) {
      const items = await marketItemService.getItemsOfUser(user);
      res.send(items);
    } else {
      const items = await marketItemService.getAllItems();
      res.send(items);
    }
  } catch (error) {
    const { name, message } = error as Error;
    res.status(400).send({ name, message });
  }
};

const getItem = async (req: Request, res: Response) => {
  try {
    const item = await marketItemService.getItem(req.params.id);
    res.send(item);
  } catch (error) {
    const { name, message } = error as Error;
    res.status(400).send({ name, message });
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    await marketItemService.updateItem(req.params.id, req.body);
    res.send('Success: item updated');
  } catch (error) {
    const { name, message } = error as Error;
    res.status(400).send({ name, message });
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    await marketItemService.deleteItem(req.params.id);
    res.send('Success: item updated');
  } catch (error) {
    const { name, message } = error as Error;
    res.status(400).send({ name, message });
  }
};

export { createNewItem, getItems, getItem, updateItem, deleteItem };
