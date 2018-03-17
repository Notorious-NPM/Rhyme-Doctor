import rapPost from '../models/rap_post';
import User from '../models/user';

// Testing
const getUserPostsHelper = ({ id }) => User.findOne({
  where: {
    id,
  },
  include: [rapPost, User],
});

export default getUserPostsHelper;
