import Joi from "joi";
import { SchemaSignupUser, SigninUser } from "../protocols/user.protocol";

const signupSchema = Joi.object<SchemaSignupUser>({
  name: Joi.string().required(),
  username: Joi.string().required(),
  image: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
});

const signinSchema = Joi.object<SigninUser>({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export { signupSchema, signinSchema };
