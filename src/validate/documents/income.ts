import Joi from 'joi';

const schemaIncomeReport = Joi.object({
  activeEmployers: Joi.array().items(Joi.string()),
  isEmployed: Joi.boolean(),
  averageMonthlyIncomeLastYear: Joi.number(),
  averageMonthlyIncomeLast3Years: Joi.number(),
  pnlIncomeLastYear: Joi.number(),
  monthlyIncome1YearAgo: Joi.number(),
  monthlyIncome3YearsAgo: Joi.number(),
  monthlyIncome: Joi.number(),
  monthsWithoutContributionsLastYear: Joi.number(),
  monthsWithoutContributionsLast3Years: Joi.number(),
  monthsOfContributionsContinuity: Joi.number()
});
export default schemaIncomeReport;
