import { NextFunction, Response, Router, Request } from "express";
import { logger } from "../lib/winston";

export function catchErrors(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.error("Request Error", error);
  return res.status(500).json({ message: "Something went wrong" });
}
