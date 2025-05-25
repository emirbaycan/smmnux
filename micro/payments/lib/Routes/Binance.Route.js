import express from 'express';
import { create, status } from '../Controllers/Binance.Controller.js';

const router = express.Router();

router.post('/create', create);
router.post('/status', status);

export default router;