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
  user.update({ image: imageUrl }).then(() => {
    console.log('success!');
  });
};

const addUserBioHelper = async (userId, imageUrl) => {
  const user = await User.findById(userId);
  user.update({ bio: imageUrl }).then(() => {
    console.log('success!');
  });
};


export { getUserDataHelper, getUserPostsHelper, addUserImageHelper, addUserBioHelper };
