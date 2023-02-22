import { AnyObject, Debt } from '../../interfaces/reports';

export default function selectDebt(doc: AnyObject): AnyObject {
  const { directDebtsTotal, indirectDebtsTotal } = doc as Debt;
  return {
    directDebtsTotal: directDebtsTotal.total.toString(),
    indirectDebtsTotal: indirectDebtsTotal.total.toString(),
    directDebtsDelay90: directDebtsTotal.delay90.toString(),
    indirectDebtsDelay90: indirectDebtsTotal.delay90.toString()
  };
}
