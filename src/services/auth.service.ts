import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { SigninUser, SignupUser, Token } from "../protocols";
import { authenticationError, usernameExistsError } from "../errors";
import { User } from "@prisma/client";
import { authRepository } from "../repositories";

const validateUniqueUsername = async (username: string) => {
  const user = await authRepository.findUserByUsername(username);
  if (user) throw usernameExistsError();
};

const generateToken = async (userId: number): Promise<Token> => {
  return { token: jwt.sign({ userId }, process.env.JWT_SECRET) };
};

const validatePassword = (password: string, hashPassword: string) => {
  if (!bcrypt.compareSync(password, hashPassword)) throw authenticationError();
};

const signup = async (data: SignupUser): Promise<User> => {
  await validateUniqueUsername(data.username);
  return authRepository.createUser({ ...data, password: bcrypt.hashSync(data.password, 11) });
};

const signin = async (data: SigninUser): Promise<Token> => {
  const user = await authRepository.findUserByUsername(data.username);
  if (!user) throw authenticationError();
  await validatePassword(data.password, user.password);
  return await generateToken(user.id);
};

export const authService = { signup, signin };
