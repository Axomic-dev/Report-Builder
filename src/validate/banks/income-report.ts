import Joi from 'joi';

const sourceItem = Joi.object({
  type: Joi.string(),
  name: Joi.string(),
  amount: Joi.number(),
  date: Joi.string()
});

const schemaIncomeReport = Joi.object({
  employerName: Joi.string(),
  seniority: Joi.number(),
  salary: Joi.number(),
  monthlyVariableIncome3Months: Joi.number(),
  monthlyVariableIncome12Months: Joi.number(),
  monthlyAccountFlow3Months: Joi.number(),
  monthlyAccountFlow12Months: Joi.number(),
  accountFlowSources: Joi.array().items(sourceItem),
  incomeSources: Joi.array().items(sourceItem)
});
export default schemaIncomeReport;
