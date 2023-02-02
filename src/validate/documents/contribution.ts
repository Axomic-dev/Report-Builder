import Joi from 'joi';

const schemaContribution = Joi.object({
  date: Joi.string().required(),
  employerName: Joi.string().required(),
  monthlyIncome: Joi.number().required(),
  employerContribution: Joi.number().required(),
  employeeContribution: Joi.number().required()
});

export default schemaContribution;
