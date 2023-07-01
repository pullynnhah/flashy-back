import "dotenv/config";
import "express-async-errors";

import cors from "cors";
import express, { Express, json } from "express";

import { connectDB } from "./database/database";

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(json());

function init(): Promise<Express> {
  connectDB();
  return Promise.resolve(app);
}

init().then(() => app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`)));
