import Joi from 'joi';
import schemaAvailableCredit from './CMF/available';
import schemaDirectDebt from './CMF/direct';
import schemaIndirectDebt from './CMF/indirect';
import schemaOtherCredit from './CMF/other';

const schemaDebt = Joi.object({
  directDebts: Joi.array().items(schemaDirectDebt.item),
  directDebtsTotal: schemaDirectDebt.total,
  indirectDebts: Joi.array().items(schemaIndirectDebt.item),
  indirectDebtsTotal: schemaIndirectDebt.total,
  availableCredits: Joi.array().items(schemaAvailableCredit.item),
  availableCreditsTotal: schemaAvailableCredit.total,
  otherCredits: Joi.array().items(schemaOtherCredit.item),
  otherCreditsTotal: schemaOtherCredit.total
});

export default schemaDebt;
