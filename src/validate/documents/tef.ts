import Joi from 'joi';

const schemaTef = Joi.object({
  name: Joi.string().min(1),
  rut: Joi.string().min(1),
  bankName: Joi.string(),
  bankCode: Joi.string().max(3),
  accountNumber: Joi.string(),
  accountType: Joi.string(),
  email: Joi.string(),
  alias: Joi.string().allow('')
});

export default schemaTef;
