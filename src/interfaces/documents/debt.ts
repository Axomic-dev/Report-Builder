interface DebtItem {
  entity: string;
  currentDebt: number;
  delay30to89: number;
  delay90: number;
  total: number;
}

interface DebtTotal {
  currentDebt: number;
  delay30to89: number;
  delay90: number;
  total: number;
}

interface CreditItem {
  entity: string;
  directAmount: number;
  indirectAmount: number;
}

interface CreditTotal {
  directAmount: number;
  indirectAmount: number;
}

export default interface DocumentDebt {
  directDebts: Array<DebtItem>;
  directDebtsTotal: DebtTotal;
  indirectDebts: Array<DebtItem>;
  indirectDebtsTotal: DebtTotal;
  availableCredits: Array<CreditItem>;
  availableCreditsTotal: CreditTotal;
  otherCredits: Array<CreditItem>;
  otherCreditsTotal: CreditTotal;
}
