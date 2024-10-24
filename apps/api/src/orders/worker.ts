import { Worker } from "bullmq";
import { logger } from "../lib/winston";
import { connection } from "../lib/ioredis";
import { Queues } from "../queue";

const worker = new Worker(
  Queues.Order,
  async (job) => {
    logger.info("Processing Job", {
      world: "hello 0",
    });
  },
  {
    connection,
  }
);

worker.on("completed", (job) => {
  logger.info(`${job.id} has completed!`, {
    world: "hello 1",
  });
});

worker.on("failed", (job, err) => {
  // @ts-ignore
  logger.info(`${job.id} has failed with ${err.message}`, {
    world: "hello 2",
  });
});
