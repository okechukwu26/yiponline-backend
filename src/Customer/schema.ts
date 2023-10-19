import Joi from "joi";

export const CustomerSchema = Joi.object({
  name: Joi.string().required(),
  pickUpLocation: Joi.string().required(),
  DropOffLocation: Joi.string().required(),
});

export const option = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};
