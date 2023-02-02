import DocumentTaxFolder from './documents/tax-folder';
import DocumentTaxSituation from './documents/tax-situation';
import DocumentDebt from './documents/debt';
import DocumentPersonalInformation from './documents/personal-information';
import DocumentContribution from './documents/contribution';
import DocumentJob from './documents/job';
import DocumentIncomeReport from './documents/income-report';
import DocumentConsolidate from './documents/consolidate';

export type TaxFolder = DocumentTaxFolder;
export type TaxSituation = DocumentTaxSituation;
export type Debt = DocumentDebt;
export type PersonalInformation = DocumentPersonalInformation;
export type Contribution = DocumentContribution;
export type Job = DocumentJob;
export type IncomeReport = DocumentIncomeReport;
export type Consolidate = DocumentConsolidate;

type BoufinDocs =
  | DocumentTaxFolder
  | DocumentTaxSituation
  | DocumentDebt
  | DocumentPersonalInformation
  | DocumentContribution
  | DocumentJob
  | DocumentIncomeReport
  | DocumentConsolidate;
type AnyObject = Record<string, unknown> | Record<string, never>;
export type BoufinAll = BoufinDocs | AnyObject;

export interface PubsubMessage {
  token: string;
  reports: Record<string, string>;
}

export interface DocumentRecord {
  docId: string;
  validate: string;
  data: Record<string, BoufinAll>;
  createdAt: string;
  updatedAt: string;
}
