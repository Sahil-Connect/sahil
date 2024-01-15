import { app } from "./app";
import { databaseURL, port } from "./config";
import { logger } from "./lib/winston";

const listen = () => {
  return new Promise<void>((resolve, reject) =>
    app.listen(port, (error: any) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    })
  );
};

listen().then(() =>
  logger.info(
    `Listening on http://localhost:${port}.`,
    `Press CTRL-C to stop\n`
  )
);
