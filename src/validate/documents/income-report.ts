import Joi from 'joi';

const schemaIncomeReport = Joi.object({
  activeEmployers: Joi.array().items(Joi.string()).required(),
  isEmployed: Joi.boolean().required(),
  averageMonthlyIncomeLastYear: Joi.number().required(),
  averageMonthlyIncomeLast3Years: Joi.number().required(),
  pnlIncomeLastYear: Joi.number().required(),
  monthlyIncome1YearAgo: Joi.number().required(),
  monthlyIncome3YearsAgo: Joi.number().required(),
  monthlyIncome: Joi.number().required(),
  monthsWithoutContributionsLastYear: Joi.number().required(),
  monthsWithoutContributionsLast3Years: Joi.number().required(),
  monthsOfContributionsContinuity: Joi.number().required()
});
export default schemaIncomeReport;
