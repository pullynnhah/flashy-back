import { prisma } from "../database";
import { SignupUser } from "../protocols";

const findUserByUsername = (username: string) => {
  return prisma.user.findUnique({ where: { username } });
};

const createUser = (data: SignupUser) => {
  return prisma.user.create({ data });
};

export const authRepository = { findUserByUsername, createUser };
