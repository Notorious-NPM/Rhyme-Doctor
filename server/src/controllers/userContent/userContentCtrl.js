import getUserPostsHelper from '../../database/dbHelpers/userContentHelpers';

const getUserPostsCtrl = (req, res) => {
  // Get all user posts
  getUserPostsHelper()
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err));
};

export default getUserPostsCtrl;
