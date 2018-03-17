import RapPost from '../../database/models/rap_post.js';
import User from '../../database/models/user.js';
import sequelize from '../../database';
// Need DB helpers

const createPostCtrl = () => {
  // optional: check if first few lines match what's already in our DB
  // create content
};

const deletePostCtrl = () => {
  // finds and deletes content
};

const commentCtrl = () => {
  // adds comment based on post id - no limit
};

const uncommentCtrl = () => {
  // deletes content based on id
};

const reportCtrl = () => {
  // reports posts based on id
};

const getCommentsCtrl = async (req, res) => {
  // Gets comments for rap post.
  const comments = await sequelize.query(
    `select users.name, text
    from comments join users
    where users.id=user_id
    and rap_post_id=${req.params.rapPostId}`,
    { type: sequelize.QueryTypes.SELECT },
  );
  res.status(200).send(comments);
};

const getPostsCtrl = async (req, res) => {
  // Gets all rap posts. Joins user table to get associated data.
  const rapPost = await RapPost.findAll({ include: [User] });
  res.status(200).send(rapPost);
};

export {
  getCommentsCtrl,
  createPostCtrl,
  deletePostCtrl,
  commentCtrl,
  uncommentCtrl,
  reportCtrl,
  getPostsCtrl,
};
