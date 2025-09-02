import express, { Request, Response } from 'express';
import path from 'path';

// Import models
import './models/counter.model';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes (must come before static files)
import counterRoutes from './routes/counter';
app.use('/api/counter', counterRoutes);

// Serve static files (Angular build output)
// From dist/server/src/ we need to go up to root, then to server/public
app.use(express.static(path.join(__dirname, '../../../server/public')));

// SPA fallback: serve index.html for all non-API routes
// Using middleware approach that's Express 5.x compatible
app.use((req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../../server/public/index.html'));
});

export default app;
