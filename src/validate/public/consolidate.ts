import Joi from 'joi';
import schemaContribution from './contribution';
import schemaIncomeReport from './income-report';
import schemaPersonalInformation from './personal-information';
import schemaJob from './job';

const schemaConsolidate = Joi.object({
  balance: Joi.number().required(),
  lastCreditedContributionDate: Joi.string().required(),
  contributionsUpToDate: Joi.boolean().required(),
  personalInformation: schemaPersonalInformation.required(),
  contributions: Joi.array().items(schemaContribution).required(),
  employers: Joi.array().items(schemaJob).required(),
  incomeReport: schemaIncomeReport.required()
});

export default schemaConsolidate;
