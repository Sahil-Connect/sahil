import { Worker } from "bullmq";

const worker = new Worker("ordersWorker", async (job) => {
  // Will print { foo: 'bar'} for the first job
  // and { qux: 'baz' } for the second.
  console.log(job.data);
  console.log("yerrrrr");
});

worker.on("completed", (job) => {
  console.log(`${job.id} has completed!`);
});

worker.on("failed", (job, err) => {
  // @ts-ignore
  console.log(`${job.id} has failed with ${err.message}`);
});
