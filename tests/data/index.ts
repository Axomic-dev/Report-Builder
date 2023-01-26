import consumerLoan from './banks/consumer-loan';
import bankIncomeReport from './banks/income-report';
import taxFolder from './public/tax-folder';
import taxSituation from './public/tax-situation';
import debt from './public/debt';
import consolidate from './public/consolidate';
import validate from '../../src/validate';
import information from './public/personal-information';
import contribution from './public/contribution';
import job from './public/job';
import income from './public/income-report';

export const testSubjects = {
  consumerLoan: {
    n: 'consumerLoan',
    validate: validate.consumerLoan,
    ...consumerLoan
  },
  bankIncomeReport: {
    n: 'bankIncomeReport',
    validate: validate.bankIncomeReport,
    ...bankIncomeReport
  },
  taxFolder: {
    n: 'taxFolder',
    validate: validate.taxFolder,
    ...taxFolder
  },
  taxSituation: {
    n: 'taxSituation',
    validate: validate.taxSituation,
    ...taxSituation
  },
  debt: {
    n: 'debt',
    validate: validate.debt,
    ...debt
  },
  personalInformation: {
    n: 'personalInformation',
    validate: validate.personalInformation,
    ...information
  },
  contribution: {
    n: 'constribution',
    validate: validate.contribution,
    ...contribution
  },
  job: {
    n: 'job',
    validate: validate.job,
    ...job
  },
  incomeReport: {
    n: 'incomeReport',
    validate: validate.incomeReport,
    ...income
  },
  consolidate: {
    n: 'consolidate',
    validate: validate.consolidate,
    ...consolidate
  }
};

export default testSubjects;
