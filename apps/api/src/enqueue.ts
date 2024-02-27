import { Queue } from "bullmq";
import { create, Queues } from "./queue";

export type Enqueue<T> = (data: T) => Promise<any>;

export const authQueue = create(Queues.Auth);
export const clientQueue = create(Queues.Client);
export const ordersQueue = create(Queues.Order);

export const pushIntoAuth: Enqueue<any> = (message) =>
  authQueue.add("auth", message);

export const pushIntoClient: Enqueue<any> = (message) =>
  ordersQueue.add("new-client", message);

export const pushIntoOrders: Enqueue<any> = (message) =>
  ordersQueue.add("new-order", message);
