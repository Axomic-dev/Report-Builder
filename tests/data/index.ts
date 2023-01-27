import tef from './documents/tef';
import bill from './documents/bill';
import movement from './documents/movement';
import debt from './documents/debt';
import consolidate from './documents/consolidate';
import validate from '../../src/validate';
import information from './documents/information';
import contribution from './documents/contribution';
import job from './documents/job';
import income from './documents/income';

export const testSubjects = {
  tef: {
    n: 'TEF',
    validate: validate.tef,
    ...tef
  },
  bill: {
    n: 'BILL',
    validate: validate.bill,
    ...bill
  },
  movement: {
    n: 'MOVEMENT',
    validate: validate.movement,
    ...movement
  },
  debt: {
    n: 'CMF_DEBT',
    validate: validate.debt,
    ...debt
  },
  information: {
    n: 'AFC_PERSONAL_INFORMATION',
    validate: validate.information,
    ...information
  },
  contribution: {
    n: 'AFC_CONTRIBUTION',
    validate: validate.contribution,
    ...contribution
  },
  job: {
    n: 'AFC_JOB',
    validate: validate.job,
    ...job
  },
  income: {
    n: 'AFC_INCOME',
    validate: validate.income,
    ...income
  },
  consolidate: {
    n: 'AFC_CONSOLIDATE',
    validate: validate.consolidate,
    ...consolidate
  }
};

export default testSubjects;
