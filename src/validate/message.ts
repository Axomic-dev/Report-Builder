import Joi from 'joi';
import { BoufinAll, PubsubMessage } from '../interfaces/reports';

export default function validateMsg(value: BoufinAll): Joi.ValidationResult<PubsubMessage> {
  const schemaMsg: Joi.ObjectSchema = Joi.object().keys({
    token: Joi.string().required(),
    reports: Joi.any().required()
  });
  return schemaMsg.validate(value);
}
