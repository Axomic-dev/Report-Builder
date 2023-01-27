import { Firestore } from '@google-cloud/firestore';
import { DocumentRecord } from './interfaces';
import { GCP_PROJECT, FIRESTORE_REQUESTS_COLLECTION_NAME } from './config';

const db: Firestore = new Firestore({
  projectId: GCP_PROJECT,
  timestampsInSnapshots: true
});

export function insert(data: Record<string, unknown>) {
  const local_time = new Date();
  const utc_time = local_time.toUTCString();
  const url = 'https://boufin-personas/validate/';
  const newDoc = db.collection(FIRESTORE_REQUESTS_COLLECTION_NAME).doc();
  console.info('Stored new report with id', newDoc.id);
  const values: DocumentRecord = {
    docId: newDoc.id,
    validate: url + newDoc.id,
    createdAt: utc_time,
    updatedAt: utc_time,
    data
  };

  newDoc
    .set(values)
    .then(() => {
      console.info('Report generated succesfully');
    })
    .catch((error: Error): void => {
      console.error(error);
    });
}