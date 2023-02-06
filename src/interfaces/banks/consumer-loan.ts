export default interface DataConsumerLoan {
  id: string;
  humanReadableId: string;
  loanAmount: number;
  balance: number;
  monthlyPayment: number;
  monthlyInterestRate: number;
  totalPaidFees: number;
  totalPayments: number;
  nextPaymentDate: string;
}
