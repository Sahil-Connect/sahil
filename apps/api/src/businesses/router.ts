import { NextFunction, Response, Router, Request } from "express";
import { logger } from "../lib/winston";
import { logRequest } from "../middleware/requestLogger";
import { validate } from "../middleware/zodValidate";
import {
  registerBusiness,
  businessSchema,
  BusinessAttributes,
} from "./operations/registerBusiness";

const businessRouter = Router();

businessRouter.use(logRequest);

businessRouter.post(
  "/",
  validate<BusinessAttributes>(businessSchema),
  async (
    req: Request,
    res: Response<BusinessAttributes>,
    next: NextFunction
  ) => {
    try {
      const business = await registerBusiness(req.body);
      // console.log("business", business);
      res.status(201).json({
        ...business,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default businessRouter;
