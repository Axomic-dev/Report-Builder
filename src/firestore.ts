import { Firestore } from '@google-cloud/firestore';
import { DatabaseRecord, BoufinAll } from './interfaces/reports';
import { GCP_PROJECT, FIRESTORE_BUILDER_COLLECTION_NAME } from './config';

const firestore: Firestore = new Firestore({
  projectId: GCP_PROJECT,
  timestampsInSnapshots: true
});

export async function insert(docId: string, data: Record<string, BoufinAll>) {
  const local_time = new Date();
  const utc_time = local_time.toUTCString();
  const url = 'https://boufin-personas/validate/';
  const newDoc = firestore.collection(FIRESTORE_BUILDER_COLLECTION_NAME).doc(docId);
  console.info('[Firestore] Stored new information on document with id', newDoc.id);

  const values: DatabaseRecord = {
    docId: newDoc.id,
    validate: url + newDoc.id,
    createdAt: utc_time,
    updatedAt: utc_time,
    data
  };

  return await newDoc
    .set(values)
    .then(() => {
      return newDoc.id;
    })
    .catch((error: Error) => {
      console.error(error);
      return '';
    });
}
