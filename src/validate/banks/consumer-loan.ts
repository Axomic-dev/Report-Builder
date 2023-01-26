import Joi from 'joi';

const schemaConsumerLoan = Joi.object({
  id: Joi.string(),
  humanReadableId: Joi.string(),
  loanAmount: Joi.number(),
  balance: Joi.number(),
  monthlyPayment: Joi.number(),
  monthlyInterestRate: Joi.number(),
  totalPaidFees: Joi.number(),
  totalPayments: Joi.number(),
  nextPaymentDate: Joi.string()
});
export default schemaConsumerLoan;
