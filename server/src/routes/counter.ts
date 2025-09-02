import express from 'express';
import * as counterController from '../controllers/counter.controller';

const router = express.Router();

// Counter collection routes
router.get('/', counterController.read);

// Counter increment route
router.post('/increment', counterController.increment);

export default router;
