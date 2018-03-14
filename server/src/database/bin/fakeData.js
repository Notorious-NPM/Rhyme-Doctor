/* eslint-disable no-use-before-define, camelcase */

const User = require('../models/user.js');
const Rap_Post = require('../models/rap_post.js');
const Comment = require('../models/comment.js');
const Follow = require('../models/follow.js');
const Report_Post = require('../models/report_post.js');
const User_Like = require('../models/user_like.js');

/**
 * Start data
*/
const usersData = [
  {
    name: 'bob',
    password: '1234',
  },
  {
    name: 'carol',
    password: '123',
  },
  {
    name: 'ben',
    password: '1234fd',
  },
  {
    name: 'carl',
    password: '1234as',
  },
  {
    name: 'jen',
    password: '1234we',
  },
  {
    name: 'Samuel Hong',
    password: '1234qwe',
  },
];

const postsData = [
  {
    text: 'hey ray',
    user_id: 1,
    like_count: 3,
  },
  {
    text: 'hey ray',
    user_id: 2,
    like_count: 0,
  },
  {
    text: 'hey ray',
    user_id: 3,
    like_count: 0,
  },
  {
    text: 'hey ray',
    user_id: 4,
    like_count: 0,
  },
  {
    text: 'hey ray',
    user_id: 1,
    like_count: 0,
  },
  {
    text: 'hey ray',
    user_id: 5,
    like_count: 0
  },
  {
    text: 'hey ray',
    user_id: 6,
    like_count: 0,
  },
  {
    text: 'hey ray',
    user_id: 6,
    like_count: 0,
  },
  {
    text: 'hey ray',
    user_id: 4,
    like_count: 0,
  },
];

const commentsData = [
  {
    text: 'how is it going?',
    user_id: 1,
    rap_post_id: 1
  },
  {
    text: 'not good',
    user_id: 2,
    rap_post_id: 1,
  },
  {
    text: 'how is it going?',
    user_id: 3,
    rap_post_id: 2,
  },
  {
    text: 'well',
    user_id: 4,
    rap_post_id: 2,
  },
  {
    text: 'how is it going?',
    user_id: 5,
    rap_post_id: 3,
  },
  {
    text: 'better',
    user_id: 1,
    rap_post_id: 3,
  },
  {
    text: 'how is it going?',
    user_id: 1,
    rap_post_id: 5,
  },
  {
    text: 'stop asking please',
    user_id: 1,
    rap_post_id: 5,
  },
  {
    text: 'how is it going?',
    user_id: 3,
    rap_post_id: 6,
  },
  {
    text: 'bots',
    user_id: 2,
    rap_post_id: 6,
  },
  {
    text: 'how is it going?',
    user_id: 1,
    rap_post_id: 1,
  },
  {
    text: 'how is it going?',
    user_id: 1,
    rap_post_id: 1,
  },
  {
    text: 'how is it going?',
    user_id: 1,
    rap_post_id: 1,
  },
];

const userLikesData = [
  {
    user_id: 1,
    rap_post_id: 1,
  },
  {
    user_id: 2,
    rap_post_id: 1,
  },
  {
    user_id: 3,
    rap_post_id: 1,
  },
];

const followsData = [
  {
    follower_id: 1,
    followee_id: 2,
  },
  {
    follower_id: 2,
    followee_id: 1,
  },
  {
    follower_id: 3,
    followee_id: 4,
  },
  {
    follower_id: 4,
    followee_id: 5,
  },
  {
    follower_id: 5,
    followee_id: 6,
  },
  {
    follower_id: 6,
    followee_id: 5,
  },
  {
    follower_id: 4,
    followee_id: 6,
  },
];

const reportPostData = [
  {
    user_id: 1,
    rap_post_id: 1,
  },
  {
    user_id: 2,
    rap_post_id: 1,
  },
  {
    user_id: 3,
    rap_post_id: 1,
  },
];

/**
 * End start data
*/

User.sync({ force: false }).then(() =>
  User.bulkCreate(usersData)
    .then(() => {
      console.log('updated users');
      return createPostsTable();
    })
    .then(() =>
      createCommentsTable())
    .then(() =>
      createLikesTable())
    .then(() =>
      createFollowsTable())
    .then(() =>
      createReportPostTable()));

const createPostsTable = () =>
  Rap_Post.sync({ force: false }).then(() =>
    Rap_Post.bulkCreate(postsData)
      .then(() => {
        console.log('updated posts');
      }));

const createCommentsTable = () => {
  Comment.sync({ force: false }).then(() =>
    Comment.bulkCreate(commentsData)
      .then(() => {
        console.log('updated comments');
      }));
};

const createLikesTable = () => {
  User_Like.sync({force: false}).then(() =>
    User_Like.bulkCreate(userLikesData)
      .then(() => {
        console.log('updated user likes');
      }));
};

const createFollowsTable = () => {
  Follow.sync({ force: false }).then(() =>
    Follow.bulkCreate(followsData)
      .then(() => {
        console.log('updated follows');
      }));
};

const createReportPostTable = () => {
  Report_Post.sync({ force: false }).then(() =>
    Report_Post.bulkCreate(reportPostData)
      .then(() => {
        console.log('updated follows');
      }));
};
