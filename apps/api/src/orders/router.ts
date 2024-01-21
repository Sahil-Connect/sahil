import { NextFunction, Response, Router, Request } from "express";
import { pushIntoOrders } from "../enqueue";
import { z } from "zod";
import { logger } from "../lib/winston";
import { logRequest } from "../middleware/requestLogger";
import { validate } from "../middleware/zodValidate";
import { initOrder, orderSchema } from "./operations/initOrder";
import { processOrder } from "./operations/processOrder";

const ordersRouter = Router();

ordersRouter.use(logRequest);

ordersRouter.post(
  "/",
  validate(orderSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { object } = req.body.input;
      const validatedInput = validate(object);
      await pushIntoOrders(validatedInput);
      return res.status(200).json({
        order: object,
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
