import express from 'express';
import authRouter from '../controllers/auth/authRouterAndController';
import userRouter from '../controllers/user/userRouter';
import contentRouter from '../controllers/content/contentRouter';
import voteRouter from '../controllers/vote/voteRouter';

import gateway from '../middleware/gateway';

const router = express.Router();

router
  .use('/auth', authRouter)
  .use(gateway)
  .use('/user', userRouter)
  .use('/content', contentRouter)
  .use('/vote', voteRouter);

export default router;
