import { NextFunction, Response, Router, Request } from "express";
import { pushIntoOrders } from "../enqueue";
import { z } from "zod";
import { logger } from "../lib/winston";
import { logRequest } from "../middleware/requestLogger";

const ordersRouter = Router();
ordersRouter.use(logRequest);

const orderSchema = z.object({
  orderId: z.string(),
});

ordersRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    await pushIntoOrders(req.body);
    const validatedInput = orderSchema.parse(req.body);
    logger.info("Validated Input", validatedInput);
    res.send({
      orders: [],
    });
  }
);

export default ordersRouter;
