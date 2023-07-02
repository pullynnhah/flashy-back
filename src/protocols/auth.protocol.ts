import { Request } from "express";

type JWTPayload = { userId: number };
type AuthRequest = Request & JWTPayload;

export { JWTPayload, AuthRequest };
