import express from 'express';
import { stadisticController } from "../controller/stadistic.controller.js";

const router = express.Router();

router.get('/requestByDate', stadisticController.requestByDate);

router.get('/requestBySpace', stadisticController.requestBySpace);

router.get('/reserveByDate', stadisticController.reserveByDate);

router.get('/reserveBySpace', stadisticController.reserveBySpace);

router.get('/totalsales', stadisticController.totalsales);

router.get('/valuesByDate', stadisticController.valuesByDate);

router.get('/valuesByMonth', stadisticController.valuesByMonth);


export default router
