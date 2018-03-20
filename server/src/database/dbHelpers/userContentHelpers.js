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

export { getUserDataHelper, getUserPostsHelper };
