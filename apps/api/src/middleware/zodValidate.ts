import { NextFunction, Response, Router, Request } from "express";
import { logger } from "../lib/winston";

const extractInputFromHasuraAction = (body: any): any | null => {
  if ("action" in body && "input" in body) {
    const inputKeys = Object.keys(body.input);
    if (inputKeys.length > 0) {
      return body.input[inputKeys[0]];
    }
  } else {
    return body;
  }
  return null;
};

export const validate =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const input = extractInputFromHasuraAction(req.body);
      const validatedInput = schema.parse(input);
      // @ts-ignore
      req.locals = {
        hello: "world",
      };

      next();
    } catch (error: any) {
      return res.status(400).json(error.errors);
    }
  };
