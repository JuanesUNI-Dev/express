import express from 'express';
import { logsReserveController } from "../controller/log_reserve.controller.js";
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/get', verifyToken, logsReserveController.get);

export default router