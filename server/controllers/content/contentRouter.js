import express from 'express';
const router = express.Router();
import { createPostCtrl, deletePostCtrl, commentCtrl, uncommentCtrl, reportCtrl } from './contentCtrl';

router.route('/createpost')
  .post(createPostCtrl)

router.route('/deletePost')
  .delete(deletePostCtrl)

router.route('/comment')
  .post(commentCtrl)

router.route('/uncomment')
  .delete(uncommentCtrl)

router.route('/report')
  .post(reportCtrl)

export default router;