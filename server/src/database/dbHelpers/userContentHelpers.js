import Sequelize from 'sequelize';
import Rap_Post from '../models/rap_post';
import User from '../models/user';

const { Op } = Sequelize;

const getUserPostsHelper = ({ user_id }) => Rap_Post.findAll({
  where: { user_id },
  include: [User],
});

export { getUserPostsHelper };
