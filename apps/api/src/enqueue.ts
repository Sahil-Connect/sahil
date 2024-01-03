import { Queue } from 'bullmq';
import { create, Queues } from "./queue";

export type Enqueue<T> = (data: T) => Promise<any>;

export const ordersQueue = create(Queues.Order);

export const pushIntoOrders: Enqueue<any> = message =>
  ordersQueue.add("new-order", message);