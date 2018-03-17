import getUserPostsHelper from '../../database/dbHelpers/userContentHelpers';

const getUserPostsCtrl = (req, res) => {
  // Get all user posts
  // res.status(200).send(req.user)
  getUserPostsHelper(req.user)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err));
};


// const getUserStatsCtrl = (req, res) => {
//   // Get all user posts
//   getUserPostsHelper(req.user)
//     .then(result => res.status(200).send(result))
//     .catch(err => res.status(404).send(err));
// };

export default getUserPostsCtrl;
