import { NextFunction, Response, Request } from "express";
import { z } from "zod";

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

export function validate<T extends z.ZodTypeAny>(schema: T) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const input = extractInputFromHasuraAction(req.body);
      req.body = schema.parse(input);
      next();
    } catch (error: any) {
      return res.status(400).json(error.errors);
    }
  };
}
