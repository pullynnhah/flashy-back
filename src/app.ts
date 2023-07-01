import "dotenv/config";
import "express-async-errors";
import cors from "cors";
import express, { Express, json, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { connectDB } from "./database/database";

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(json());

app.get("/hello", (req: Request, res: Response) => res.sendStatus(StatusCodes.OK));

function init(): Promise<Express> {
  connectDB();
  return Promise.resolve(app);
}

init().then(() => app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`)));
