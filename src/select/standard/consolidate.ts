import selectIncomeReport from './afc/income-report';
import selectPersonalInformation from './afc/personal-information';
import { Consolidate } from '../../interfaces/reports';

export default function selectConsolidate(doc: Consolidate) {
  const { incomeReport, personalInformation } = doc;
  return {
    incomeReport: selectIncomeReport(incomeReport),
    personalInformation: selectPersonalInformation(personalInformation)
  };
}
