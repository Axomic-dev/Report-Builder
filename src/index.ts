import { Request as Req, Response as Res } from 'express';

export function messageHandler(req: Req, res: Res): void {
  try {
    const rawData = Buffer.from(req.body.message.data, 'base64');
    const message = JSON.parse(rawData.toString('utf-8'));
    console.info(message);
  } catch (error) {
    console.error(error);
  }
  res.status(200).send('ack');
}
console.info('Server started listening to topic...');
