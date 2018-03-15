import Rap_Post from '../../database/models/rap_post';
import User from '../../database/models/user';

const getUserPostsCtrl = (req, res) => {
  // Get all user posts
  Rap_Post.findAll({
    where: { user_id: req.params.user_id },
    include: [User],
  }).then((rapPosts) => {
    res.status(200).send(rapPosts);
  });
};

export { getUserPostsCtrl };
