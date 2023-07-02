import Joi from "joi";
import { NextFunction, Request, Response } from "express";
import { schemaError } from "../errors";

const validate = (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
  const validation = schema.validate(req.body, { abortEarly: false });
  if (validation.error) throw schemaError(validation.error.details.map(err => err.message));
  else next();
};

export { validate };
