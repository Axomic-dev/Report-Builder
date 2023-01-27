import Joi from 'joi';

const schemaMovement = Joi.object({
  type: Joi.string(),
  accountNumber: Joi.string(),
  date: Joi.string(),
  description: Joi.string().allow(''),
  channel: Joi.string(),
  documentNumber: Joi.string(),
  amount: Joi.number(),
  balance: Joi.number()
});

export default schemaMovement;
