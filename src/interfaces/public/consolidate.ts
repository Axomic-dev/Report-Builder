import DataPersonalInformation from './personal-information';
import DataContribution from './contribution';
import DataJob from './job';
import DataIncomeReport from './income-report';

export default interface DataConsolidate {
  balance: number;
  lastCreditedContributionDate: string;
  contributionsUpToDate: boolean;
  personalInformation: DataPersonalInformation;
  contributions: Array<DataContribution>;
  employers: Array<DataJob>;
  incomeReport: DataIncomeReport;
}
