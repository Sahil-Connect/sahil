import { NextFunction, Response, Router, Request } from "express";
import { registerUser } from "./operations/register";
import { listUsers } from "./operations/listUsers";

const userRouter = Router();

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

userRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const users = await listUsers();
  res.status(200).json({
    users,
  });
});

export default userRouter;
