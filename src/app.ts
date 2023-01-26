import express from 'express';
import type { Request, Response } from 'express';

import HealthCheckRouter from './routers/';

const app = express();

app.use(express.json());

HealthCheckRouter(app);

app.use(function (req: Request, res: Response) {
  res.status(404).json({});
});

export default app;
