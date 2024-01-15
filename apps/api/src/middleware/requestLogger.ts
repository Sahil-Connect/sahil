import { NextFunction, Response, Router, Request } from "express";
import { logger } from "../lib/winston";

export function logRequest(req: Request, res: Response, next: NextFunction) {
  logger.info("Request Type", req.method);
  logger.info("Request Body", req.body);
  next();
}
