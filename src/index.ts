import { Request as Req, Response as Res } from 'express';
import { BoufinAll, PubsubMessage } from './interfaces/reports';
import { Action } from './interfaces/boufin';
import boufinRequest from './requests';
import { insert } from './firestore';
import match from './match';

export async function messageHandler(req: Req, res: Res) {
  try {
    const rawData = Buffer.from(req.body.message.data, 'base64');
    const message: PubsubMessage = JSON.parse(rawData.toString('utf-8'));
    const data: Record<string, BoufinAll> = {};
    let action: Action;
    for (action in message.requests) {
      const response = await boufinRequest(message.token, message.requests[action]);
      if (response.taskStatusCode === 400) continue;
      data[`${action}`] = match(response, action);
    }
    const reportId = await insert(data);
    console.info(`Report stored succesfully on ${reportId}!`);
  } catch (error) {
    console.error(error);
  }
  res.status(200).end();
}
console.info('Server started listening to topic...');
