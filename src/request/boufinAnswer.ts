export default async function getAnswer(token: string, taskId: string) {
  const method = 'GET';
  const redirect = 'follow';
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);

  const init: RequestInit = { method, headers, redirect };
  return fetch(`https://api-sandbox.boufin.com/api/v1/tasks/${taskId}`, init)
    .then((response) => response)
    .catch((error) => {
      console.error('error', error);
      return undefined;
    });
}
