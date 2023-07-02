import "dotenv/config";
import "express-async-errors";

import cors from "cors";
import express, { Express, json } from "express";

import { connectDB } from "./database";
import { errorHandler } from "./middlewares";
import { authRouter } from "./routes";

const app = express();
const { PORT } = process.env;

app.use(cors()).use(json()).use(authRouter).use(errorHandler);

function init(): Promise<Express> {
  connectDB();
  return Promise.resolve(app);
}

init().then(() => app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`)));
