import { BankCode, EntityId } from './boufin';

export interface DocumentTef {
  name: string;
  rut: string;
  bankName: EntityId;
  bankCode?: BankCode;
  accountNumber: string;
  accountType: string;
  email: string;
  alias: string;
}

export interface DocumentBill {
  company: string;
  alias: string;
  userId: string;
}

export interface DocumentMovement {
  type: string;
  accountNumber: string;
  date: string;
  description: string;
  channel: string;
  documentNumber?: string;
  amount: number;
  balance: number;
}

interface DebtItem {
  entity: EntityId;
  currentDebt: number;
  delay30to89: number;
  delay90: number;
  total: number;
}

interface DebtTotal {
  currentDebt: number;
  delay30to89: number;
  delay90: number;
  total: number;
}

interface CreditItem {
  entity: EntityId;
  directAmount: number;
  indirectAmount: number;
}

interface CreditTotal {
  directAmount: number;
  indirectAmount: number;
}

export interface DocumentDebt {
  directDebts: Array<DebtItem>;
  directDebtsTotal: DebtTotal;
  indirectDebts: Array<DebtItem>;
  indirectDebtsTotal: DebtTotal;
  availableCredits: Array<CreditItem>;
  availableCreditsTotal: CreditTotal;
  otherCredits: Array<CreditItem>;
  otherCreditsTotal: CreditTotal;
}

export interface DocumentPersonalInformation {
  name: string;
  rut: string;
  birthDate: string;
  affiliationDate: string;
  phone: string;
  email: string;
  street: string;
  number: string;
  extra: string;
  region: string;
  commune: string;
}

export interface DocumentContribution {
  date: string;
  employerName: string;
  monthlyIncome: number;
  employerContribution: number;
  employeeContribution: number;
}

export interface DocumentJob {
  employerRut: string;
  employerName: string;
  contractType: string;
  subscriptionDate: string;
  startDate: string;
  endDate: string;
  activeEmployer: boolean;
}

export interface DocumentIncomeReport {
  activeEmployers: Array<string>;
  isEmployed: boolean;
  averageMonthlyIncomeLastYear: number;
  averageMonthlyIncomeLast3Years: number;
  pnlIncomeLastYear: number;
  monthlyIncome1YearAgo: number;
  monthlyIncome3YearsAgo: number;
  monthlyIncome: number;
  monthsWithoutContributionsLastYear: number;
  monthsWithoutContributionsLast3Years: number;
  monthsOfContributionsContinuity: number;
}

export interface DocumentConsolidate {
  balance: number;
  lastCreditedContributionDate: string;
  contributionsUpToDate: boolean;
  personalInformation: DocumentPersonalInformation;
  contributions: Array<DocumentContribution>;
  employers: Array<DocumentJob>;
  incomeReport: DocumentIncomeReport;
}

type BoufinDocs =
  | DocumentTef
  | DocumentBill
  | DocumentMovement
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
