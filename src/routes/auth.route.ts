import { Router } from "express";
import { validate } from "../middlewares";
import { signinSchema, signupSchema } from "../schema";
import { authController } from "../controllers";

const authRouter = Router();

authRouter.post("/signup", validate(signupSchema), authController.signup);
authRouter.post("/signin", validate(signinSchema), authController.signin);

export { authRouter };
