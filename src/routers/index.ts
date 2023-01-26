import type { Express, Request, Response } from 'express';

const router = (app: Express): void => {
  // Health check
  app.get('/health-check', async (req: Request, res: Response) => {
    return res.json({ status: 'ok' });
  });
};

export default router;
