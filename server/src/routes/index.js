import express from 'express';
import authRouter from '../controllers/auth/authRouter';
import userRouter from '../controllers/user/userRouter';
import contentRouter from '../controllers/content/contentRouter';
import voteRouter from '../controllers/vote/voteRouter';
import wordsapiRouter from '../../api/wordsapi/routes/wordsapiRouter';

const router = express.Router();

router
  .use('/auth', authRouter)
<<<<<<< HEAD
<<<<<<< HEAD
  /* .use((req, res, next) => {
=======
  .use((req, res, next) => {
>>>>>>> Updated wordsapi route
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(403).end('You must be logged in to do this!');
    }
<<<<<<< HEAD
  }) */
=======
  // .use((req, res, next) => {
  //   if (req.isAuthenticated()) {
  //     next();
  //   } else {
  //     res.status(403).end('You must be logged in to do this!');
  //   }
  // })
>>>>>>> findSynCtrl taking in submitted word
=======
  })
>>>>>>> Updated wordsapi route
  .use('/user', userRouter)
  .use('/content', contentRouter)
  .use('/vote', voteRouter)
  .use('/word', wordsapiRouter);

export default router;
