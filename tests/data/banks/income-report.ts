import { BankIncomeReport } from '../../../src/interfaces/reports';

export const correct: BankIncomeReport = {
  employerName: 'TEF EMPRESAS GASCO S.A.',
  seniority: 9,
  salary: 2276437,
  monthlyVariableIncome3Months: 528071,
  monthlyVariableIncome12Months: 288039,
  monthlyAccountFlow3Months: 2026283,
  monthlyAccountFlow12Months: 1553813,
  accountFlowSources: [
    {
      type: 'outflow',
      name: 'TEF Edgardo Navarrete EIRL',
      amount: 18452392,
      date: '2022-08-21'
    }
  ],
  incomeSources: [
    {
      type: 'main',
      name: 'TEF EMPRESAS GASCO S.A.',
      amount: 2276437,
      date: '2022-05-17'
    }
  ]
};

const dataBankIncomeReport = { correct };
export default dataBankIncomeReport;
