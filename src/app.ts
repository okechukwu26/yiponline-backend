import dotenv from "dotenv";
dotenv.config();
import express, { json, urlencoded } from "express";
import cors from "cors";
import { DATABASE } from "./db";
import PlannerRouter from "./Planner/router";
import CustomerRouter from "./Customer/router";

const app = express();
const Port = process.env.PORT ?? 5000;
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use("/api", PlannerRouter);
app.use("/api", CustomerRouter);

DATABASE();
app.listen(Port, () => {
  console.log(`server is live`);
});
