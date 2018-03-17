import rapPost from '../models/rap_post';
import User from '../models/user';

// Testing
const getUserPostsHelper = ({ id }) => rapPost.findAll({
  where: {
    user_id: id,
  },
  include: [User],
});

export default getUserPostsHelper;
