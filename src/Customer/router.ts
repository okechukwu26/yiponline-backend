import { Controller } from "./Controller";
import { Router } from "express";

const router = Router();

router.post("/customer", Controller.create);
router.get("/customer", Controller.get);

export default router;
