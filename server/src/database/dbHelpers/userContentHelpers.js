import rapPost from '../models/rap_post';
import User from '../models/user';

// Testing

const getUserDataHelper = ({ id }) => User.findOne({
  where: {
    id,
  },
  attributes: { exclude: ['password', 'id'] },
});

const getUserPostsHelper = ({ id }) => rapPost.findAll({
  where: {
    user_id: id,
  },
});

const addUserImageHelper = async (userId, imageUrl) => {
  const user = await User.findById(userId);
  // console.log(user);
  user.update({ image: imageUrl }).then(function() {
    console.log('success!');
  });
};

// const rapPost = await RapPost.findById(Number(req.body.rapPostId));
// rapPost.increment('like_count', { by: 1 });
// const user = await User.findById(req.user.id);
// user.increment('like_count', { by: 1 });
// res.status(201).send(JSON.stringify('Success!'));

export { getUserDataHelper, getUserPostsHelper, addUserImageHelper };
