import { getUserPostsHelper } from '../../database/dbHelpers/userContentHelpers';

const getUserPostsCtrl = (req, res) => {
  // Get all user posts
  getUserPostsHelper(req.params)
    .then(result => res.status(201).send(result))
    .catch(err => res.status(404).send(err));
};

export { getUserPostsCtrl };