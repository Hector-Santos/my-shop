import * as itemRepository from '../repositories/itemRepository';
import { TItemData } from '../types/ItemsTypes';

export async function findAll() {
  const items = await itemRepository.findAll();
  return items;
}

export async function findById(id: number) {
  const item = await itemRepository.findById(id);
  return item;
}

export async function insert(item: TItemData) {
  const existingItem = await itemRepository.findByTitle(item.title);
  if (existingItem)
    throw { type: 'conflict', message: 'Esse item já está na sua lista!' };

  return await itemRepository.insert(item);
}
