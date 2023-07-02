import { AppError } from "../protocols";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const errorHandler = (error: AppError, req: Request, res: Response, next: NextFunction) => {
  const conflictErrors = ["UsernameExistsError"];
  const authErrors = ["AuthenticationError", "TokenMissingError"];
  const schemaErrors = ["SchemaError"];
  if (conflictErrors.includes(error.name)) res.status(StatusCodes.CONFLICT);
  else if (authErrors.includes(error.name)) res.status(StatusCodes.UNAUTHORIZED);
  else if (schemaErrors.includes(error.name)) res.status(StatusCodes.UNPROCESSABLE_ENTITY);
  else res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  res.send({ error: error.message });
};
