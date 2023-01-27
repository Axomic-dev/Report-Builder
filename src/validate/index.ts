import {
  BoufinAll,
  DocumentTef,
  DocumentBill,
  DocumentMovement,
  DocumentDebt,
  DocumentConsolidate,
  DocumentPersonalInformation,
  DocumentContribution,
  DocumentJob,
  DocumentIncomeReport
} from '../interfaces/reports';
import validateMsg from './message';
import schemaTef from './documents/tef';
import schemaBill from './documents/bill';
import schemaMovement from './documents/movement';
import schemaDebt from './documents/debt';
import schemaInformation from './documents/information';
import schemaContribution from './documents/contribution';
import schemaJob from './documents/job';
import schemaIncomeReport from './documents/income';
import schemaConsolidate from './documents/consolidate';
import Joi from 'joi';

const validate = {
  message: validateMsg,
  tef: (doc: BoufinAll): Joi.ValidationResult<DocumentTef> => schemaTef.validate(doc),
  bill: (doc: BoufinAll): Joi.ValidationResult<DocumentBill> => schemaBill.validate(doc),
  movement: (doc: BoufinAll): Joi.ValidationResult<DocumentMovement> =>
    schemaMovement.validate(doc),
  debt: (doc: BoufinAll): Joi.ValidationResult<DocumentDebt> => schemaDebt.validate(doc),
  information: (doc: BoufinAll): Joi.ValidationResult<DocumentPersonalInformation> =>
    schemaInformation.validate(doc),
  contribution: (doc: BoufinAll): Joi.ValidationResult<DocumentContribution> =>
    schemaContribution.validate(doc),
  job: (doc: BoufinAll): Joi.ValidationResult<DocumentJob> => schemaJob.validate(doc),
  income: (doc: BoufinAll): Joi.ValidationResult<DocumentIncomeReport> =>
    schemaIncomeReport.validate(doc),
  consolidate: (doc: BoufinAll): Joi.ValidationResult<DocumentConsolidate> =>
    schemaConsolidate.validate(doc)
};

export default validate;
