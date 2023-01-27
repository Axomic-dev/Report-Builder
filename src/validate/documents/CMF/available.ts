import Joi from 'joi';

const item = Joi.object({
  entity: Joi.string(),
  directAmount: Joi.number(),
  indirectAmount: Joi.number()
});

const total = Joi.object({
  directAmount: Joi.number(),
  indirectAmount: Joi.number()
});

const schemaAvailableCredit = { item, total };
export default schemaAvailableCredit;
