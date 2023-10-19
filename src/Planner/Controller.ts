import { Request, Response } from "express";
import Planner, { IPlanner } from "./model";
import { PlannerSchema, option } from "./schema";
import Customer from "../Customer/model";

export class Controller {
  static async create(req: Request, res: Response) {
    try {
      const body: IPlanner = req.body;
      const validator = PlannerSchema.validate(body, option);
      if (validator.error) {
        return res
          .status(400)
          .json({ error: validator.error.details[0].message });
      }
      const exist = await Planner.findOne({ customerId: body.customerId });
      if (exist) {
        return res
          .status(400)
          .json({ error: "This customer already has a slot" });
      }

      const planner = await Planner.create(body);
      const customer = await Customer.findOne({ _id: body.customerId });
      if (customer) {
        customer.active = false;
        await customer.save();
      }
      return res.status(201).json(planner);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getAllByDate(req: Request, res: Response) {
    const { schedule } = req.query;

    if (!schedule) {
      // Handle the case when 'schedule' is missing in the query parameters
      return res.status(400).json({ error: "Missing schedule parameter" });
    }
    try {
      const plan = await Planner.find({ schedule });
      return res.status(200).json(plan);
    } catch (error) {
      // Handle date parsing errors
      return res.status(400).json({ error: "Invalid date format" });
    }
  }
  static async getAllBySlot(req: Request, res: Response) {
    try {
      const plan = await Planner.find({ ...req.query });
      return res.status(200).json(plan);
    } catch (error) {
      // Handle date parsing errors
      return res.status(400).json({ error: "Invalid date format" });
    }
  }
}

//docker tag local-image:tagname new-repo:tagname
//docker push new-repo:tagname
