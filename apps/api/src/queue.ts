import { Queue } from 'bullmq';

export enum Queues {
  Event = "Event",
  Mail = "Mail",
  Notification = "Notification",
  Order = "Order"
}

export function create(name: Queues) {
  return new Queue(name);
}