import Joi from 'joi';

const schemaContribution = Joi.object({
  date: Joi.string(),
  employerName: Joi.string(),
  monthlyIncome: Joi.number(),
  employerContribution: Joi.number(),
  employeeContribution: Joi.number()
});

export default schemaContribution;
