import * as R from "ramda";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { SigninUser } from "../protocols";
import { authService } from "../services";

const signup = async (req: Request, res: Response) => {
  const body = R.omit(["confirmPassword"], req.body);
  await authService.signup(body);
  return res.sendStatus(StatusCodes.CREATED);
};

const signin = async (req: Request, res: Response) => {
  const body = req.body as SigninUser;

  const token = await authService.signin(body);
  return res.status(StatusCodes.OK).send(token);
};

export const authController = { signup, signin };
