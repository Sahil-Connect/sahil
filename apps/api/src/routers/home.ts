import { Response, Router, Request } from "express";
const homeRouter = Router();

homeRouter.get("/", (req: Request, res: Response) => {
  res.send({
    greetings: "Welcome to Sahil API 🚀🎉",
  });
});

export default homeRouter;
