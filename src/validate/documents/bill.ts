import Joi from 'joi';

const schemaBill = Joi.object({
  company: Joi.string(),
  alias: Joi.string().allow('').optional(),
  userId: Joi.string()
});

export default schemaBill;
