import { AnyObject, Debt } from '../../interfaces/reports';
import { clpFormat } from '../../tools/format';

export default function selectDebt(doc: AnyObject): AnyObject {
  const { directDebtsTotal, indirectDebtsTotal } = doc as Debt;
  return {
    directDebtsTotal: clpFormat(directDebtsTotal.total),
    indirectDebtsTotal: clpFormat(indirectDebtsTotal.total),
    directDebtsDelay90: clpFormat(directDebtsTotal.delay90),
    indirectDebtsDelay90: clpFormat(indirectDebtsTotal.delay90)
  };
}
