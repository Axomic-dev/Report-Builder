import Joi from 'joi';

const item = Joi.object({
  entity: Joi.string(),
  currentDebt: Joi.number(),
  delay30to89: Joi.number(),
  delay90: Joi.number(),
  total: Joi.number()
});

const total = Joi.object({
  currentDebt: Joi.number(),
  delay30to89: Joi.number(),
  delay90: Joi.number(),
  total: Joi.number()
});

const schemaIndirectDebt = { item, total };
export default schemaIndirectDebt;
