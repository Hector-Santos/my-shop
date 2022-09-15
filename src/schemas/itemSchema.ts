import Joi from 'joi';

export const itemSchema = Joi.object({
  title: Joi.string().required(),
  url: Joi.string().uri().required(),
  description: Joi.string().required(),
  amount: Joi.number().required()
});
