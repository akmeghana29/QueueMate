import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./models/index.js";
import authRoutes from "./routes/auth.js";
import queueRoutes from "./routes/queue.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/queues", queueRoutes);
const PORT = process.env.PORT || 4000;
const start = async () => {
  await sequelize.sync();
  app.listen(PORT);
};
start();
