import RapPost from '../../database/models/rap_post.js';
import User from '../../database/models/user.js';
import Comment from '../../database/models/comment.js';
import ReportPost from '../../database/models/report_post.js';
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
  const comment = await Comment.create({
    user_id: user.dataValues.id,
    rap_post_id: postId,
    text,
  });
  res.status(201).send(comment);
};

const uncommentCtrl = () => {
  // deletes content based on id
};

const reportCtrl = async (req, res) => {
  // reports posts based on id
  const [_, created] = await ReportPost.findOrCreate({ // eslint-disable-line
    where: {
      user_id: req.user.id,
      rap_post_id: req.body.rapPostId,
    },
  });

  if (!created) {
    res.status(409).send(JSON.stringify('Already reported'));
  } else {
    const rapPost = await RapPost.findById(Number(req.body.rapPostId));
    rapPost.increment('report_count', { by: 1 });
    res.status(201).send(JSON.stringify('Success!'));
  }
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
  const rapPost = await sequelize.query(
    'select * from rap_posts order by like_count desc;',
    { type: sequelize.QueryTypes.SELECT },
  );
  res.status(200).send(rapPost);
};

const getFriendsPostsCtrl = async (req, res) => {
  // Gets all rap posts. Joins user table to get associated data.
  const friends = await sequelize.query(
    `select friendID from friends where userID = ${req.user.id};`,
    { type: sequelize.QueryTypes.SELECT },
  );
  const friendsArr = friends.map(obj => obj.friendID);

  const rapPost = await sequelize.query(
    `select * from rap_posts
    where user_id in (${friendsArr})
    order by like_count desc;`,
    { type: sequelize.QueryTypes.SELECT },
  );
  // console.log(rapPost);
  res.status(200).send(rapPost);
};

export {
  getFriendsPostsCtrl,
  getCommentsCtrl,
  createPostCtrl,
  deletePostCtrl,
  commentCtrl,
  uncommentCtrl,
  reportCtrl,
  getPostsCtrl,
};
