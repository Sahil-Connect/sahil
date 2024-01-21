import { NextFunction, Response, Router, Request } from "express";
import { logger } from "../lib/winston";
import { logRequest } from "../middleware/requestLogger";
import { validate } from "../middleware/zodValidate";
import {
  registerBusiness,
  businessSchema,
} from "./operations/registerBusiness";

const businessRouter = Router();

businessRouter.use(logRequest);

// register a business
businessRouter.post(
  "/",
  validate(businessSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // @ts-ignore
      const business = await registerBusiness(req.body);
      res.send({
        business,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default businessRouter;
