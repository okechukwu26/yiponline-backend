import { Schema, model } from "mongoose";

export interface ICustomer {
  name: string;
  pickUpLocation: string;
  DropOffLocation: string;
  active:boolean
}

const customerSchema = new Schema(
  {
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
    active:{
      type:Boolean,
      default:true
    }
  },
  { timestamps: true }
);

const Customer = model<ICustomer>("customer", customerSchema);
export default Customer;
