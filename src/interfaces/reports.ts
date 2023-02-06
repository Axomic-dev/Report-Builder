import DataConsumerLoan from './banks/consumer-loan';
import DataBankIncomeReport from './banks/income-report';
import DataTaxFolder from './public/tax-folder';
import DataTaxSituation from './public/tax-situation';
import DataDebt from './public/debt';
import DataPersonalInformation from './public/personal-information';
import DataContribution from './public/contribution';
import DataJob from './public/job';
import DataIncomeReport from './public/income-report';
import DataConsolidate from './public/consolidate';
import { Action, EntityId } from './boufin';

export type ConsumerLoan = DataConsumerLoan;
export type BankIncomeReport = DataBankIncomeReport;
export type TaxFolder = DataTaxFolder;
export type TaxSituation = DataTaxSituation;
export type Debt = DataDebt;
export type PersonalInformation = DataPersonalInformation;
export type Contribution = DataContribution;
export type Job = DataJob;
export type IncomeReport = DataIncomeReport;
export type Consolidate = DataConsolidate;

type BoufinReports =
  | DataConsumerLoan
  | DataBankIncomeReport
  | DataTaxFolder
  | DataTaxSituation
  | DataDebt
  | DataPersonalInformation
  | DataContribution
  | DataJob
  | DataIncomeReport
  | DataConsolidate;
export type AnyObject = BoufinReports | Record<string, unknown> | Record<string, never>;
export type BoufinAll = AnyObject | Array<AnyObject>;

export interface PubsubMessage {
  token: string;
  requests: Record<Action, string>;
}

export interface BoufinResponse {
  taskStatusCode: number;
  taskStatus: string;
  results:
    | {
        username: string;
        entityId: EntityId;
        data: BoufinAll;
      }
    | Record<string, never>;
}

export interface DatabaseRecord {
  docId: string;
  validate: string;
  data: Record<string, BoufinAll>;
  createdAt: string;
  updatedAt: string;
}
