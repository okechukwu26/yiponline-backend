import { Schema, model } from "mongoose";

export interface IPlanner {
  customerId: string;
  name: string;
  pickUpLocation: string;
  DropOffLocation: string;
  slot: string;
  schedule: string;
}

const plannerSchema = new Schema(
  {
    customerId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    pickUpLocation: {
      type: String,
      required: true,
    },
    DropOffLocation: {
      type: String,
      required: true,
    },
    slot: {
      type: String,
      require: true,
    },
    schedule: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Planner = model<IPlanner>("planner", plannerSchema);
export default Planner;
