import Joi from 'joi';

const itemDebt = Joi.object({
  entity: Joi.string().required().required(),
  currentDebt: Joi.number().required().required(),
  delay30to89: Joi.number().required().required(),
  delay90: Joi.number().required().required(),
  total: Joi.number().required().required()
});

const totalDebt = Joi.object({
  currentDebt: Joi.number().required(),
  delay30to89: Joi.number().required(),
  delay90: Joi.number().required(),
  total: Joi.number().required()
});

const itemCredit = Joi.object({
  entity: Joi.string().required(),
  directAmount: Joi.number().required(),
  indirectAmount: Joi.number().required()
});
const totalCredit = Joi.object({
  directAmount: Joi.number().required(),
  indirectAmount: Joi.number().required()
});

const schemaDebt = Joi.object({
  directDebts: Joi.array().items(itemDebt).required(),
  directDebtsTotal: totalDebt.required(),
  indirectDebts: Joi.array().items(itemDebt).required(),
  indirectDebtsTotal: totalDebt.required(),
  availableCredits: Joi.array().items(itemCredit).required(),
  availableCreditsTotal: totalCredit.required(),
  otherCredits: Joi.array().items(itemCredit).required(),
  otherCreditsTotal: totalCredit.required()
});

export default schemaDebt;
