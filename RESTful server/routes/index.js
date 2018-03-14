import express from 'express';
import userRouter from '../controllers/user/userRouter';
import contentRouter from '../controllers/content/contentRouter';
import voteRouter from '../controllers/vote/voteRouter';

const router = ('express').Router();
 
router
  .use('/user', userRouter)  
  .use('/content', contentRouter)
  .use('/vote', voteRouter)

export default router;