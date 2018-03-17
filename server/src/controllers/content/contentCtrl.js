import RapPost from '../../database/models/rap_post.js';
import User from '../../database/models/user.js';
import Comment from '../../database/models/comment.js';
import sequelize from '../../database';
// Need DB helpers

const createPostCtrl = (req, res) => {
  // optional: check if first few lines match what's already in our DB
  // create content
  RapPost.create({
    text: req.body.text,
    user_id: req.user.id,
    username: req.user.username,
  }).then((lyrics) => {
    res.status(201).end(`Posted: ${lyrics.text.substr(0, 20)}... successfully!`);
  });
};

const deletePostCtrl = () => {
  // finds and deletes content
};

const commentCtrl = async (req, res) => {
  // adds comment based on post id - no limit
  const { text, username, postId } = req.body;
  const user = await User.findOne({ where: { name: username } });
  const comment = await Comment.create({ user_id: user.dataValues.id, rap_post_id: postId, text: text });
  res.status(201).send(comment);
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
  const rapPost = await RapPost.findAll({
    attributes: { exclude: ['user_id'] },
  });
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
