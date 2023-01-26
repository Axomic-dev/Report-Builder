interface SourceItem {
  type: string;
  name: string;
  amount: number;
  date: string;
}

export default interface DataIncomeReport {
  employerName: string;
  seniority: number;
  salary: number;
  monthlyVariableIncome3Months: number;
  monthlyVariableIncome12Months: number;
  monthlyAccountFlow3Months: number;
  monthlyAccountFlow12Months: number;
  accountFlowSources: Array<SourceItem>;
  incomeSources: Array<SourceItem>;
}
