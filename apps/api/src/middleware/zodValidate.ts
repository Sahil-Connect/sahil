import { NextFunction, Response, Router, Request } from "express";

export const validate =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    try {
      // schema.parse(req.body);

      // @ts-ignore
      req.locals = {
        hello: "world"
      }

      next();
    } catch (err) {
      // @ts-ignore
      return res.status(400).send(err.errors);
    }
  };
