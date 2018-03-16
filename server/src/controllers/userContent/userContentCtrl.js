import getUserPostsHelper from '../../database/dbHelpers/userContentHelpers';

const getUserPostsCtrl = (req, res) => {
  console.log(req.user.username);
  // Get all user posts
  getUserPostsHelper(req.params)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err));
};

export default getUserPostsCtrl;
