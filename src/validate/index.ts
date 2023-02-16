import {
  AnyObject,
  ConsumerLoan,
  BankIncomeReport,
  TaxFolder,
  TaxSituation,
  Debt,
  Consolidate,
  PersonalInformation,
  Contribution,
  Job,
  IncomeReport,
  AnyValidateFunction
} from '../interfaces/reports';
import schemaConsumerLoan from './banks/consumer-loan';
import schemaBankIncomeReport from './banks/income-report';
import schemaTaxFolder from './public/tax-folder';
import schemaTaxSituation from './public/tax-situation';
import schemaDebt from './public/debt';
import schemaPersonalInformation from './public/personal-information';
import schemaContribution from './public/contribution';
import schemaJob from './public/job';
import schemaIncomeReport from './public/income-report';
import schemaConsolidate from './public/consolidate';
import defaultValues from '../tools/default';
import Joi from 'joi';
import { Action } from '../interfaces/boufin';

export function valConsumerLoan(doc: AnyObject): Joi.ValidationResult<ConsumerLoan> {
  return schemaConsumerLoan.validate(doc);
}
export function valBankIncomeReport(doc: AnyObject): Joi.ValidationResult<BankIncomeReport> {
  return schemaBankIncomeReport.validate(doc);
}
export function valTaxFolder(doc: AnyObject): Joi.ValidationResult<TaxFolder> {
  return schemaTaxFolder.validate(doc);
}
export function valTaxSituation(doc: AnyObject): Joi.ValidationResult<TaxSituation> {
  return schemaTaxSituation.validate(doc);
}
export function valDebt(doc: AnyObject): Joi.ValidationResult<Debt> {
  return schemaDebt.validate(doc);
}
export function valPersonalInformation(doc: AnyObject): Joi.ValidationResult<PersonalInformation> {
  return schemaPersonalInformation.validate(doc);
}
export function valContribution(doc: AnyObject): Joi.ValidationResult<Contribution> {
  return schemaContribution.validate(doc);
}
export function valJob(doc: AnyObject): Joi.ValidationResult<Job> {
  return schemaJob.validate(doc);
}
export function valIncomeReport(doc: AnyObject): Joi.ValidationResult<IncomeReport> {
  return schemaIncomeReport.validate(doc);
}
export function valConsolidate(doc: AnyObject): Joi.ValidationResult<Consolidate> {
  return schemaConsolidate.validate(doc);
}

const validate: Record<Action, AnyValidateFunction> = {
  ...defaultValues,
  'consumer-loan': valConsumerLoan,
  'income-report': valBankIncomeReport,
  'tax-folder': valTaxFolder,
  'tax-situation': valTaxSituation,
  debt: valDebt,
  'personal-information': valPersonalInformation,
  contribution: valContribution,
  job: valJob,
  consolidate: valConsolidate
};

export default validate;
