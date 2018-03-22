import User from '../../database/models/user';
import UserLike from '../../database/models/user_like';
import RapPost from '../../database/models/rap_post';


const upvoteCtrl = async (req, res) => {
  // Check to see if user already liked post
  // res.send(console.log(req.body));
  const [_, created] = await UserLike.findOrCreate({
    where: {
      user_id: req.user.id,
      rap_post_id: req.body.rapPostId,
    },
  });

  if (!created) {
    res.status(409).send(JSON.stringify('Already liked'));
  } else {
    const rapPost = await RapPost.findById(Number(req.body.rapPostId));
    rapPost.increment('like_count', { by: 1 });
    const user = await User.findById(rapPost.user_id);
    user.increment('like_count', { by: 1 });
    res.status(201).send(JSON.stringify('Success!'));
  }
};

const downvoteCtrl = () => {

};

export { upvoteCtrl, downvoteCtrl };
