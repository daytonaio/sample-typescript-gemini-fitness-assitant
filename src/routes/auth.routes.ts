import express from 'express'
import { signIn } from '../controllers/signin.controller';
import { signUp } from '../controllers/signup.controller';
// import { verifyToken } from '../middleware/verifyToken.middleware';

const router = express.Router();

router.route('/sign-in').post(signIn);
router.route('/sign-up').post(signUp);
// router.route('/goHome').get(verifyToken, home);

export default router