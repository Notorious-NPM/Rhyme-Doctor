import { getUserPostsHelper, getUserDataHelper } from '../../database/dbHelpers/userContentHelpers';

const getUserPostsCtrl = (req, res) => {
  // Get all user posts
  // res.status(200).send(console.log(req.user));
  getUserPostsHelper(req.user)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err));
};


const getUserDataCtrl = (req, res) => {
  // Get all user posts
  getUserDataHelper(req.user)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err));
};

export { getUserPostsCtrl, getUserDataCtrl };
