import { ConsumerLoan } from '../../../src/interfaces/reports';

export const correct: ConsumerLoan = {
  id: '75275708',
  humanReadableId: '75275708',
  loanAmount: 3000000,
  balance: 555578,
  monthlyPayment: 277789,
  monthlyInterestRate: 1.66,
  totalPaidFees: 2,
  totalPayments: 12,
  nextPaymentDate: '2023-03-05'
};

const dataConsumerLoan = { correct };
export default dataConsumerLoan;
