import { NextFunction, Response, Router, Request } from "express";
import { pushIntoOrders } from "../enqueue";
import { z } from "zod";
import { logger } from "../lib/winston";
import { logRequest } from "../middleware/requestLogger";
import { validate } from "../middleware/zodValidate";
import { initOrder } from "./operations/initOrder";
import { processOrder } from "./operations/processOrder";

const ordersRouter = Router();

const orderObject = z.object({
  customerId: z.string(),
  order_items: z.object({
    data: z
      .object({
        productId: z.string(),
        price: z.number(),
        quantity: z.number(),
      })
      .array(),
  }),
});

ordersRouter.use(logRequest);

ordersRouter.post(
  "/",
  validate(orderObject),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { object } = req.body.input;
      await pushIntoOrders(object);
      return res.status(200).json({
        isValid: true,
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
