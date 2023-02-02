import Joi from 'joi';

const schemaPersonalInformation = Joi.object({
  name: Joi.string().required(),
  rut: Joi.string().required(),
  birthDate: Joi.string().required(),
  affiliationDate: Joi.string(),
  phone: Joi.string(),
  email: Joi.string(),
  street: Joi.string(),
  number: Joi.string(),
  extra: Joi.string().allow(''),
  region: Joi.string(),
  commune: Joi.string()
});

export default schemaPersonalInformation;
