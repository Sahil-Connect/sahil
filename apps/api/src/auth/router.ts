import { NextFunction, Response, Router, Request } from "express";
import { logRequest } from "../middleware/requestLogger";
import { validate } from "../middleware/zodValidate";
import {
  registerUser,
  userSchema
} from "./operations/register";

const authRouter = Router();

authRouter.use(logRequest);

authRouter.post(
  "/",
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await registerUser(req.body);
      // pushIntoClient(user);
      res.status(201).json({
        ...user,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default authRouter;
