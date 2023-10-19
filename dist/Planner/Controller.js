"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const model_1 = __importDefault(require("./model"));
const schema_1 = require("./schema");
class Controller {
    static async create(req, res) {
        try {
            const body = req.body;
            const validator = schema_1.PlannerSchema.validate(body, schema_1.option);
            if (validator.error) {
                return res
                    .status(400)
                    .json({ error: validator.error.details[0].message });
            }
            const exist = await model_1.default.findOne({ id: body.id });
            if (exist) {
                return res
                    .status(400)
                    .json({ error: "This customer already has a slot" });
            }
            const planner = await model_1.default.create(body);
            return res.status(201).json(planner);
        }
        catch (error) {
            return res.status(500).json(error);
        }
    }
    static async getAllByDate(req, res) {
        const args = req.query;
        const plan = await model_1.default.find({ schedule: args.schedule });
        return res.status(200).json(plan);
    }
    static async getAllBySlot(req, res) {
        const args = req.query;
        const plan = await model_1.default.find(args);
        return res.status(200).json(plan);
    }
}
exports.Controller = Controller;
