import consumerLoan from './banks/consumer-loan';
import incomeReport from './banks/income-report';
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
    validate: validate['consumer-loan'],
    ...consumerLoan
  },
  incomeReport: {
    n: 'incomeReport',
    validate: validate['income-report'],
    ...incomeReport
  },
  taxFolder: {
    n: 'taxFolder',
    validate: validate['tax-folder'],
    ...taxFolder
  },
  taxSituation: {
    n: 'taxSituation',
    validate: validate['tax-situation'],
    ...taxSituation
  },
  debt: {
    n: 'debt',
    validate: validate.debt,
    ...debt
  },
  personalInformation: {
    n: 'personalInformation',
    validate: validate['personal-information'],
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
  consolidate: {
    n: 'consolidate',
    validate: validate.consolidate,
    ...consolidate
  }
};

export default testSubjects;
