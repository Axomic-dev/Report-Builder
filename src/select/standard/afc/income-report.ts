import { AnyObject, IncomeReport } from '../../../interfaces/reports';
import { clpFormat } from '../../../tools/format';

export default function selectIncomeReport(doc: AnyObject): AnyObject {
  const {
    monthlyIncome1YearAgo,
    monthlyIncome3YearsAgo,
    monthlyIncome,
    monthsWithoutContributionsLastYear
  } = doc as IncomeReport;
  return {
    averageIncome1YearAgo: clpFormat(monthlyIncome1YearAgo),
    averageIncome3YearAgo: clpFormat(monthlyIncome3YearsAgo),
    lastIncomeBalance: clpFormat(monthlyIncome),
    monthsWithIncomeLastYear: `${12 - monthsWithoutContributionsLastYear} meses`
  };
}
