import { NextFunction, Response, Router, Request } from "express";
const userRouter = Router();
import { registerUser } from "./operations/register";

userRouter.get(
  "/:userId",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      hi: "Message",
    });
  }
);

userRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await registerUser(req.body);
    res.status(201).json({
      user,
    });
  }
);

userRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    hi: "Message",
  });
});

export default userRouter;
