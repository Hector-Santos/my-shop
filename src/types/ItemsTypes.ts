import { items } from '@prisma/client';

export type TItemData = Omit<items, 'id'>;
export type TItemUpdate = Partial<items>;
