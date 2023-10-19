"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const plannerSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    pickUpLocation: {
        type: String,
        required: true
    },
    DropOffLocation: {
        type: String,
        required: true
    },
    slot: {
        type: String,
        require: true
    },
    schedule: {
        type: Date,
        required: true
    }
}, { timestamps: true });
const Planner = (0, mongoose_1.model)("planner", plannerSchema);
exports.default = Planner;
