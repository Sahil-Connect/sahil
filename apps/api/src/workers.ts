import { logger } from "./lib/winston";
import concurrently from "concurrently";

(async () => {
  await concurrently(
    [
      {
        command: "yarn work:order",
        name: "order",
      },
    ],
    {
      killOthers: ["failure"],
    }
  );
  logger.info("Queues Started", {
    Queue: "Name"
  });
})();
