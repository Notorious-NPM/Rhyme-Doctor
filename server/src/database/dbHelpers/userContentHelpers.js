import rapPost from '../models/rap_post';
import User from '../models/user';

// Testing
const getUserPostsHelper = () => rapPost.findAll({
  where: {
    user_id: 1,
  },
  include: [User],
});

export default getUserPostsHelper;
