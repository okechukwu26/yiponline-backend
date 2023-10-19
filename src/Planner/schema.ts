import Joi from "joi";

export const PlannerSchema = Joi.object({
  customerId: Joi.string().required(),
  name: Joi.string().required(),
  pickUpLocation: Joi.string().required(),
  DropOffLocation: Joi.string().required(),
  slot: Joi.string().required(),
  schedule: Joi.string().required(),
});

export const option = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};
