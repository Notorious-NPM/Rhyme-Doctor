import rapPost from '../models/rap_post';
import User from '../models/user';

// Testing

const getUserDataHelper = ({ username }) => User.findOne({
  where: {
    name: username,
  },
  attributes: { exclude: ['password', 'id'] },
  include: [{
    model: rapPost,
  }],
});

// const getUserPostsHelper = ({ username }) => User.findOne({
//   where: {
//     name: username,
//   },
//   // attributes: { exclude: ['id'] },
//   include: [{
//     model: rapPost,
//   }],
// });

const getUserPostsHelper = ({ username }) => rapPost.findAll({
  where: {
    username,
  },
  attributes: { exclude: ['id'] },
  // include: [{
  //   model: rapPost,
  // }],
});

export { getUserDataHelper, getUserPostsHelper };
