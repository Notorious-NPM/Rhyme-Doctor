import User from '../../database/models/user';
import UserLike from '../../database/models/user_like';
import RapPost from '../../database/models/rap_post';


const upvoteCtrl = (req, res) => {
  // Check to see if user already liked post
  UserLike.findOrCreate({ where: { user_id: req.body.userId, rap_post_id: req.body.rapPostId } })
    .spread((_, created) => {
      if (!created) {
        res.status(409).send(JSON.stringify('Already liked'));
      } else {
        // Update post likes by one
        RapPost.findById(Number(req.body.rapPostId))
          .then((post) => {
            return post.increment('like_count', { by: 1 });
          })
          .then(() => {
            res.status(201).send(JSON.stringify('Success!'));
          });
      }
    });
};

const downvoteCtrl = () => {

};

export { upvoteCtrl, downvoteCtrl };
