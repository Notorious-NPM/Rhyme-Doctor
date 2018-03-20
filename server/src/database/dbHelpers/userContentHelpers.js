import rapPost from '../models/rap_post';
import User from '../models/user';

// Testing

const getUserDataHelper = ({ username }) => User.findOne({
  where: {
    name: username,
  },
  attributes: { exclude: ['password', 'id'] },
});

const getUserPostsHelper = ({ username }) => rapPost.findAll({
  where: {
    username,
  },
});

export { getUserDataHelper, getUserPostsHelper };
