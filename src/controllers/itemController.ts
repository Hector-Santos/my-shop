import { Request, Response } from 'express';
import * as itemService from '../services/itemService';

export async function get(req: Request, res: Response) {
  const items = await itemService.findAll();

  res.send(items);
}

export async function getById(req: Request, res: Response) {
  const id: number = Number(req.params.id);

  const item = await itemService.findById(id);

  if (!item) {
    res.sendStatus(404);
  }

  res.send(item);
}

export async function create(req: Request, res: Response) {
  const item = req.body;

  const createdItem = await itemService.insert(item);

  res.status(201).send(createdItem);
}
