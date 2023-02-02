import {
  BoufinAll,
  TaxFolder,
  TaxSituation,
  Debt,
  Consolidate,
  PersonalInformation,
  Contribution,
  Job,
  IncomeReport
} from '../interfaces/reports';
import validateMsg from './message';
import schemaTaxFolder from './documents/tax-folder';
import schemaTaxSituation from './documents/tax-situation';
import schemaDebt from './documents/debt';
import schemaPersonalInformation from './documents/personal-information';
import schemaContribution from './documents/contribution';
import schemaJob from './documents/job';
import schemaIncomeReport from './documents/income-report';
import schemaConsolidate from './documents/consolidate';
import Joi from 'joi';

const select = {
  message: validateMsg,
  taxFolder: (doc: BoufinAll): Joi.ValidationResult<TaxFolder> => schemaTaxFolder.validate(doc),
  taxSituation: (doc: BoufinAll): Joi.ValidationResult<TaxSituation> =>
    schemaTaxSituation.validate(doc),
  debt: (doc: BoufinAll): Joi.ValidationResult<Debt> => schemaDebt.validate(doc),
  information: (doc: BoufinAll): Joi.ValidationResult<PersonalInformation> =>
    schemaPersonalInformation.validate(doc),
  contribution: (doc: BoufinAll): Joi.ValidationResult<Contribution> =>
    schemaContribution.validate(doc),
  job: (doc: BoufinAll): Joi.ValidationResult<Job> => schemaJob.validate(doc),
  income: (doc: BoufinAll): Joi.ValidationResult<IncomeReport> => schemaIncomeReport.validate(doc),
  consolidate: (doc: BoufinAll): Joi.ValidationResult<Consolidate> =>
    schemaConsolidate.validate(doc)
};

export default select;
