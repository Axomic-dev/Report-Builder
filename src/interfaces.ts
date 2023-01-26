export interface PubsubMessage {
  token: string;
  reports: Array<string>;
}

export interface DocumentRecord {
  docId: string;
  validate: string;
  data: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}
