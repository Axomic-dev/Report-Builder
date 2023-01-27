import Joi from 'joi';

const item = Joi.object({
  entity: Joi.string().required(),
  currentDebt: Joi.number().required(),
  delay30to89: Joi.number().required(),
  delay90: Joi.number().required(),
  total: Joi.number().required()
});

const total = Joi.object({
  currentDebt: Joi.number(),
  delay30to89: Joi.number(),
  delay90: Joi.number(),
  total: Joi.number()
});

const schemaDirectDebt = { item, total };
export default schemaDirectDebt;
