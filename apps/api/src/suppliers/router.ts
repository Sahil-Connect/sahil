import { NextFunction, Response, Router, Request } from "express";
import { logRequest } from "../middleware/requestLogger";
import { validate } from "../middleware/zodValidate";
import { listRecommendedSuppliers } from "./operations/list";

const suppliersRouter = Router();

suppliersRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { suppliers } = await listRecommendedSuppliers();
      res.status(201).json({
        suppliers,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default suppliersRouter;
