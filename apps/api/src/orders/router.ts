import { NextFunction, Response, Router, Request } from "express";
const ordersRouter = Router();
import { pushIntoOrders } from "../enqueue";
import { z } from "zod";
import { logger } from "../lib/winston";

const orderSchema = z.object({
  orderId: z.string(),
});

ordersRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    await pushIntoOrders(req.body);
    logger.info("Request Body", req.body);
    const validatedInput = orderSchema.parse(req.body);
    logger.info("Validated Input", validatedInput);
    res.send({
      orders: [],
    });
  }
);

export default ordersRouter;
