import Joi from 'joi';

const schemaJob = Joi.object({
  employerRut: Joi.string().required(),
  employerName: Joi.string().required(),
  contractType: Joi.string().required(),
  subscriptionDate: Joi.string().required(),
  startDate: Joi.string().required(),
  endDate: Joi.string().allow('').required(),
  activeEmployer: Joi.boolean().required()
});

export default schemaJob;
