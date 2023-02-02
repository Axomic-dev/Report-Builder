import DocumentPersonalInformation from './personal-information';
import DocumentContribution from './contribution';
import DocumentJob from './job';
import DocumentIncomeReport from './income-report';

export default interface DocumentConsolidate {
  balance: number;
  lastCreditedContributionDate: string;
  contributionsUpToDate: boolean;
  personalInformation: DocumentPersonalInformation;
  contributions: Array<DocumentContribution>;
  employers: Array<DocumentJob>;
  incomeReport: DocumentIncomeReport;
}
