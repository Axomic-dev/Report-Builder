import Joi from 'joi';
import schemaContribution from './contribution';
import schemaIncomeReport from './income';
import schemaPersonalInformation from './information';
import schemaJob from './job';

const schemaConsolidate = Joi.object({
  balance: Joi.number(),
  lastCreditedContributionDate: Joi.string(),
  contributionsUpToDate: Joi.boolean(),
  personalInformation: schemaPersonalInformation,
  contributions: Joi.array().items(schemaContribution),
  employers: Joi.array().items(schemaJob),
  incomeReport: schemaIncomeReport
});

export default schemaConsolidate;
