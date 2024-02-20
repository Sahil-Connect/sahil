import { Queue } from "bullmq";
import { connection } from "./lib/ioredis";
import { redisHost, redisPort } from "./config";

export enum Queues {
  Auth = "Auth",
  Client = "Client",
  Event = "Event",
  Mail = "Mail",
  Notification = "Notification",
  Order = "Order",
}

const queueConfig = {
  connection: {
    host: redisHost,
    port: redisPort,
  },
};

export function create(name: Queues, config = queueConfig) {
  return new Queue(name, { connection });
}
