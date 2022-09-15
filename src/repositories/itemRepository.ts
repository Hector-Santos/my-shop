import { prisma } from '../database';
import { TItemData, TItemUpdate } from './../types/ItemsTypes';

export async function findAll() {
  const result = await prisma.items.findMany();

  return result;
}

export async function findById(id: number) {
  const result = await prisma.items.findFirst({ where: { id } });
  return result;
}

export async function findByTitle(title: string) {
  const result = await prisma.items.findUnique({ where: { title } });
  return result;
}

export async function insert(item: TItemData) {
  return await prisma.items.create({ data: item });
}

export async function update(id: number, item: TItemUpdate) {
  await prisma.items.update({ where: { id }, data: item });
}

export async function remove(id: number) {
  await prisma.items.delete({ where: { id } });
}
