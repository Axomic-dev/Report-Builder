export default interface DocumentIncomeReport {
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
