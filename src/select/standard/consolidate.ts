import selectIncomeReport from './afc/income-report';
import selectPersonalInformation from './afc/personal-information';
import { AnyObject, Consolidate } from '../../interfaces/reports';

export default function selectConsolidate(doc: AnyObject): AnyObject {
  const { incomeReport, personalInformation } = doc as Consolidate;
  return {
    incomeReport: selectIncomeReport(incomeReport),
    personalInformation: selectPersonalInformation(personalInformation)
  };
}
