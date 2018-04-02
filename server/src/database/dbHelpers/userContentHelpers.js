import rapPost from '../models/rap_post';
import User from '../models/user';
import sequelize from '../';

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
  console.log('IS THIS WORKING?', id, name);
  if (id) {
    return sequelize.query(
      `select rap_posts.id,
              username, text,
              rap_posts.like_count,
              report_count,
              rap_posts.created_at,
              rap_posts.updated_at,
              user_id,
              image
      from rap_posts join users on users.id = user_id
      where user_id = ${id}
      order by like_count asc;`,
      { type: sequelize.QueryTypes.SELECT },
    );
  } else if (name) {
    return sequelize.query(
      `select rap_posts.id,
              username, text,
              rap_posts.like_count,
              report_count,
              rap_posts.created_at,
              rap_posts.updated_at,
              user_id,
              image
      from rap_posts join users on users.id = user_id
      where username = "${name}"
      order by like_count asc;`,
      { type: sequelize.QueryTypes.SELECT },
    );
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
