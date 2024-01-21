import { NextFunction, Response, Router, Request } from "express";
import { pushIntoOrders } from "../enqueue";
import { z } from "zod";
import { logger } from "../lib/winston";
import { logRequest } from "../middleware/requestLogger";
import { validate } from "../middleware/zodValidate";
import {
  initOrder,
  orderSchema,
  OrderAttributes,
} from "./operations/initOrder";
import { processOrder } from "./operations/processOrder";

const ordersRouter = Router();

ordersRouter.use(logRequest);

type OrdersActionType = {
  created_at: Date;
  customerId: string;
  destination: string;
  id: string;
  orderId: string;
  origin: string;
  processedBy: string;
};

ordersRouter.post(
  "/",
  validate<OrderAttributes>(orderSchema),
  async (req: Request, res: Response<OrdersActionType>, next: NextFunction) => {
    try {
      const order = await initOrder(req.body);
      // push into Queue
      await pushIntoOrders(req.body);
      res.status(201).send({
        ...order,
      });
    } catch (error) {
      next(error);
    }
  }
);

ordersRouter.post("/process", async (req, res, next) => {
  try {
    // const order = processOrder(req.body);
    res.send({ status: "success" });
  } catch (error) {
    next(error);
  }
});

export default ordersRouter;
