import { User } from "@prisma/client";

type SignupUser = Omit<User, "id">;
type SigninUser = Omit<SignupUser, "image">;
type SchemaSignupUser = SignupUser & { confirmPassword: "string" };
type Token = { token: string };

export { SignupUser, SigninUser, SchemaSignupUser, Token };
