import taxFolder from './documents/tax-folder';
import taxSituation from './documents/tax-situation';
import debt from './documents/debt';
import consolidate from './documents/consolidate';
import validate from '../../src/validate';
import information from './documents/information';
import contribution from './documents/contribution';
import job from './documents/job';
import income from './documents/income';

export const testSubjects = {
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
    validate: validate.information,
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
    validate: validate.income,
    ...income
  },
  consolidate: {
    n: 'consolidate',
    validate: validate.consolidate,
    ...consolidate
  }
};

export default testSubjects;
