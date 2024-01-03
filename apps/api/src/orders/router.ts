import { NextFunction, Response, Router, Request } from "express";
const ordersRouter = Router();
import { pushIntoOrders } from "../enqueue";
import { z } from "zod";

const orderSchema = z.object({
  orderId: z.string(),
});

ordersRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const queueEvent = await pushIntoOrders(req.body);
    console.log(req.body);
    const validatedInput = orderSchema.parse(req.body);
    console.log(validatedInput);
    res.send({
      orders: [],
    });


  }
);

export default ordersRouter;
