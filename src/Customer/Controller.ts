import { Request, Response } from "express";
import Customer from "./model";
import { CustomerSchema, option } from "./schema";

export class Controller {
  static async create(req: Request, res: Response) {
    const validator = CustomerSchema.validate(req.body, option);
    if (validator.error) {
      return res
        .status(400)
        .json({ error: validator.error.details[0].message });
    }

    const customer = await Customer.create(req.body);
    return res.status(201).json(customer);
  }

  static async get(req: Request, res: Response) {
    const customer = await Customer.find({active:true});
    return res.status(200).json(customer);
  }
}
