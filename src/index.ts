import { Message, PubSub } from '@google-cloud/pubsub';
import { GCP_PROJECT, GCP_SUBSCRIPTION } from './config';

const pubsub = new PubSub();
export const subscriptionName = `projects/${GCP_PROJECT}/subscriptions/${GCP_SUBSCRIPTION}`;
const subscription = pubsub.subscription(subscriptionName);

export function messageHandler(pull: Message): void {
  try {
    console.info('Received message with id', pull.id);
    const raw_data: string = pull.data.toString();
    pull.ack();
    const message = JSON.parse(raw_data);
    console.info(message);
  } catch (error) {
    console.error(error);
  }
}

subscription.on('message', messageHandler);
subscription.on('error', function (error: Error): void {
  console.error(`Error: ${error}`);
});
console.info('Server started listening to topic...');
