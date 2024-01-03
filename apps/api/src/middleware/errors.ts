import { NextFunction, Response, Router, Request } from "express";
import { logger } from "../lib/winston";

export function catchErrors(req: Request, res: Response, next: NextFunction) {
  logger.error("Request Error", req.body);
  return res
  .status(500)
  .json({ message: "Something went wrong" });
}
