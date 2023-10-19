"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.option = exports.PlannerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.PlannerSchema = joi_1.default.object({
    id: joi_1.default.number().required(),
    name: joi_1.default.string().required(),
    pickUpLocation: joi_1.default.string().required(),
    DropOffLocation: joi_1.default.string().required(),
    slot: joi_1.default.string().required(),
    schedule: joi_1.default.date().required()
});
exports.option = {
    abortEarly: false,
    errors: {
        wrap: {
            label: "",
        },
    },
};
