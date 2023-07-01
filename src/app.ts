import "dotenv/config";
import "express-async-errors";
import cors from "cors";
import express, { json, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(json());

app.get("/hello", (req: Request, res: Response) => res.sendStatus(StatusCodes.OK));

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
