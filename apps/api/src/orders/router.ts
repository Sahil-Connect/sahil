import { NextFunction, Response, Router, Request } from "express";
import { pushIntoOrders } from "../enqueue";
import { object, z } from "zod";
import { logger } from "../lib/winston";
import { logRequest } from "../middleware/requestLogger";
import { validate } from "../middleware/zodValidate";
import { initOrder } from "./operations/initOrder";

const ordersRouter = Router();

const orderSchema = z.object({
  orderId: z.string(),
});

ordersRouter.use(validate(orderSchema));
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
  async (req: Request, res: Response<OrdersActionType>, next: NextFunction) => {
    try {
      // @ts-ignore
      const order = await initOrder(req.locals);
      await pushIntoOrders(req.body);
      res.send({
        ...order,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default ordersRouter;
