import { Controller } from "./Controller";
import { Router } from "express";

const router = Router();

router.post("/planner", Controller.create);
router.get("/planner", Controller.getAllByDate);
router.get("/planner/slot", Controller.getAllBySlot)

export default router;
