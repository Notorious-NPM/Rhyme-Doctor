import rapPost from '../models/rap_post';
import User from '../models/user';

// Testing

const getUserDataHelper = ({ id, name }) => {
  if (id) {
    return User.findOne({
      where: {
        id,
      },
      attributes: { exclude: ['password', 'id'] },
    });
  } else if (name) {
    return User.findOne({
      where: {
        name,
      },
      attributes: { exclude: ['password', 'id'] },
    });
  }
};

const getUserPostsHelper = ({ id, name }) => {
  if (id) {
    return rapPost.findAll({
      where: {
        user_id: id,
      },
    });
  } else if (name) {
    return rapPost.findAll({
      where: {
        username: name,
      },
    });
  }
};

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
