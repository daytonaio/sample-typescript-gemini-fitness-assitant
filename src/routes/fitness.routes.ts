import express from 'express'
import { verifyToken } from '../middleware/verifyToken.middleware';
import { getFitnessAdvice, getNutritionAdvice } from '../controllers/getData.controller';

const router = express.Router();

router.route('/getFitnessAdvice').post(verifyToken, getFitnessAdvice);
router.route('/getNutritionAdvice').post(verifyToken, getNutritionAdvice);

export default router