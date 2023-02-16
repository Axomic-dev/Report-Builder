import { AnyObject, IncomeReport } from '../../../interfaces/reports';

export default function selectIncomeReport(doc: AnyObject): AnyObject {
  const {
    monthlyIncome1YearAgo,
    monthlyIncome3YearsAgo,
    monthlyIncome,
    monthsWithoutContributionsLastYear
  } = doc as IncomeReport;
  return {
    averageIncome1YearAgo: monthlyIncome1YearAgo.toString(),
    averageIncome3YearAgo: monthlyIncome3YearsAgo.toString(),
    lastIncomeBalance: monthlyIncome.toString(),
    monthsWithIncomeLastYear: (12 - monthsWithoutContributionsLastYear).toString()
  };
}
