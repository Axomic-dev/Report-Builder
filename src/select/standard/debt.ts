import { Debt } from '../../interfaces/reports';

export default function selectDebt(doc: Debt) {
  const { directDebtsTotal, otherCreditsTotal, indirectDebtsTotal, availableCreditsTotal } = doc;
  const directTotal = availableCreditsTotal.directAmount + otherCreditsTotal.directAmount;
  const indirectTotal = availableCreditsTotal.indirectAmount + otherCreditsTotal.indirectAmount;
  return {
    directDebtsTotal: directDebtsTotal.total.toString(),
    indirectDebtsTotal: indirectDebtsTotal.total.toString(),
    directCreditsTotal: directTotal.toString(),
    indirectCreditsTotal: indirectTotal.toString()
  };
}
