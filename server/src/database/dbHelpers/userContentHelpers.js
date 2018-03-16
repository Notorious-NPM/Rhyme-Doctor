import rapPost from '../models/rap_post';
import User from '../models/user';

const getUserPostsHelper = ({ username }) => {
  User.findOne({
    where: { name: username },
  }).then((result) => {
    rapPost.findAll({
      where: { user_id: result },
      include: [User],
    });
  })
    .catch(err => console.log(err));
};

export default getUserPostsHelper;
