import express from 'express'
import { verifyToken } from '../middleware/verifyToken.middleware';
import { getFitnessAdvice, getNutritionAdvice } from '../controllers/getData.controller';

const router = express.Router();

router.route('/getFitnessAdvice').get(verifyToken, getFitnessAdvice);
router.route('/getNutritionAdvice').get(verifyToken, getNutritionAdvice);

export default router