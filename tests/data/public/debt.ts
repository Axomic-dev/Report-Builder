import { Debt } from '../../../src/interfaces/reports';
import { EntityId } from '../../../src/interfaces/boufin';

export const correct: Debt = {
  directDebts: [
    {
      entity: EntityId.SANTANDER,
      currentDebt: 44391215,
      delay30to89: 1956322,
      delay90: 0,
      total: 46347537
    }
  ],
  directDebtsTotal: {
    currentDebt: 87667643,
    delay30to89: 4226097,
    delay90: 0,
    total: 91893740
  },
  indirectDebts: [
    {
      entity: EntityId.CHILE,
      currentDebt: 135701618,
      delay30to89: 0,
      delay90: 0,
      total: 135701618
    }
  ],
  indirectDebtsTotal: {
    currentDebt: 682633714,
    delay30to89: 2626700,
    delay90: 0,
    total: 685260414
  },
  availableCredits: [],
  availableCreditsTotal: {
    directAmount: 0,
    indirectAmount: 0
  },
  otherCredits: [
    {
      entity: EntityId.ITAU,
      directAmount: 24002591,
      indirectAmount: 0
    }
  ],
  otherCreditsTotal: {
    directAmount: 167804654,
    indirectAmount: 3161907
  }
};

const dataBill = { correct };
export default dataBill;
