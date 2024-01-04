import { Queue } from "bullmq";

export enum Queues {
  Event = "Event",
  Mail = "Mail",
  Notification = "Notification",
  Order = "Order",
}

const queueConfig = {
  connection: {
    host: "http://127.0.0.1",
    port: 6379,
  },
}

export function create(name: Queues, config = queueConfig) {
  return new Queue(name);
}
