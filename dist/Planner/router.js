"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("./Controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/planner", Controller_1.Controller.create);
router.get("/planner", Controller_1.Controller.getAllByDate);
router.get("/planner/slot", Controller_1.Controller.getAllBySlot);
exports.default = router;
