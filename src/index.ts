import { Request as Req, Response as Res } from 'express';
import { AnyObject, BoufinAll, PubsubMessage } from './interfaces/reports';
import { Action, DocumentTier } from './interfaces/boufin';
import boufinRequest from './requests';
import { insert } from './firestore';
import validate from './validate';
import select from './select';
import Joi from 'joi';

function sanitize(data: AnyObject, action: Action, tier: DocumentTier) {
  const { value, error } = validate[action](data) as Joi.ValidationResult<AnyObject>;
  if (error) throw new Error(`Error: Failed at validate ${action} action.`);
  return select[tier][action](value);
}

export async function messageHandler(req: Req, res: Res) {
  try {
    const rawData = Buffer.from(req.body.message.data, 'base64');
    const message: PubsubMessage = JSON.parse(rawData.toString('utf-8'));
    const data: Record<string, BoufinAll> = {};
    let action: Action;
    for (action in message.requests) {
      const response = await boufinRequest(message.token, message.requests[action]);
      if (response.taskStatusCode === 400) continue;
      data[action] = sanitize(response.results.data, action, message.tier) as AnyObject;
    }
    const reportId = await insert(message.docId, data);
    console.info(`Report stored succesfully on ${reportId}!`);
  } catch (error) {
    console.error(error);
  }
  res.status(200).end();
}
console.info('Server started listening to topic...');
