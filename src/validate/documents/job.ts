import Joi from 'joi';

const schemaJob = Joi.object({
  employerRut: Joi.string(),
  employerName: Joi.string(),
  contractType: Joi.string(),
  subscriptionDate: Joi.string(),
  startDate: Joi.string(),
  endDate: Joi.string().allow(''),
  activeEmployer: Joi.boolean()
});

export default schemaJob;
