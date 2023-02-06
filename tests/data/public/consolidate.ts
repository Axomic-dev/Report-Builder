import information from './personal-information';
import contribution from './contribution';
import job from './job';
import income from './income-report';
import { Consolidate } from '../../../src/interfaces/reports';

export const correct: Consolidate = {
  balance: 7960534,
  lastCreditedContributionDate: '01-2023',
  contributionsUpToDate: true,
  personalInformation: information.correct,
  contributions: [contribution.correct],
  employers: [job.correct],
  incomeReport: income.correct
};

const dataConsolidate = { correct };
export default dataConsolidate;
