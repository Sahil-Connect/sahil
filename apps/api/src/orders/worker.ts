import { Worker } from "bullmq";

const worker = new Worker("ordersWorker", async (job) => {
  console.log(job.data);
});

worker.on("completed", (job) => {
  console.log(`${job.id} has completed!`);
});

worker.on("failed", (job, err) => {
  // @ts-ignore
  console.log(`${job.id} has failed with ${err.message}`);
});
