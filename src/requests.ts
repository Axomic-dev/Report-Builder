import { BoufinResponse } from './interfaces/reports';

const fail: BoufinResponse = {
  taskStatusCode: 400,
  taskStatus: 'Error: Response failed at reception.',
  results: Object()
};
export default async function boufinRequest(token: string, taskId: string) {
  const method = 'GET';
  const redirect = 'follow';
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  const init: RequestInit = { method, headers, redirect };
  try {
    const response = await fetch(`https://api-sandbox.boufin.com/api/v1/tasks/${taskId}`, init);
    const body: BoufinResponse = await response.json();
    return body;
  } catch (error) {
    console.error(error);
    return fail;
  }
}
