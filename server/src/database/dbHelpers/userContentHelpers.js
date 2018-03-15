import rapPost from '../models/rap_post';
import User from '../models/user';

const getUserPostsHelper = ({ userId }) => rapPost.findAll({
  where: { user_id: userId },
  include: [User],
});

export default getUserPostsHelper;
