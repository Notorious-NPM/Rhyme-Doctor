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
    like_count: '3',
  },
  {
    name: 'carol',
    password: '123',
    like_count: '0',
  },
  {
    name: 'ben',
    password: '1234fd',
    like_count: '0',
  },
  {
    name: 'carl',
    password: '1234as',
    like_count: '0',
  },
  {
    name: 'jen',
    password: '1234we',
    like_count: '0',
  },
  {
    name: 'Samuel Hong',
    password: '1234qwe',
    like_count: '0',
  },
];

const postsData = [
  {
    text: 'hey ray',
    username: 'bob',
    user_id: 1,
    like_count: 3,
  },
  {
    text: 'hey ray',
    username: 'carol',
    user_id: 2,
    like_count: 0,
  },
  {
    text: 'hey ray',
    username: 'ben',
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
    username: 'bob',
    user_id: 1,
    like_count: 0,
  },
  {
    text: 'hey ray',
    username: 'jen',
    user_id: 5,
    like_count: 0,
  },
  {
    text: 'hey ray',
    username: 'Samuel Hong',
    user_id: 6,
    like_count: 0,
  },
  {
    text: 'hey ray',
    username: 'Samuel Hong',
    user_id: 6,
    like_count: 0,
  },
  {
    text: 'hey ray',
    username: 'carl',
    user_id: 4,
    like_count: 0,
  },
];

const commentsData = [
  {
    text: 'how is it going?',
    username: 'bob',
    user_id: 1,
    rap_post_id: 1,
  },
  {
    text: 'not good',
    username: 'carol',
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
    username: 'carl',
    user_id: 4,
    rap_post_id: 2,
  },
  {
    text: 'how is it going?',
    username: 'jen',
    user_id: 5,
    rap_post_id: 3,
  },
  {
    text: 'better',
    username: 'bob',
    user_id: 1,
    rap_post_id: 3,
  },
  {
    text: 'how is it going?',
    username: 'bob',
    user_id: 1,
    rap_post_id: 5,
  },
  {
    text: 'stop asking please',
    username: 'bob',
    user_id: 1,
    rap_post_id: 5,
  },
  {
    text: 'how is it going?',
    username: 'ben',
    user_id: 3,
    rap_post_id: 6,
  },
  {
    text: 'bots',
    username: 'carol',
    user_id: 2,
    rap_post_id: 6,
  },
  {
    text: 'how is it going?',
    username: 'bob',
    user_id: 1,
    rap_post_id: 1,
  },
  {
    text: 'how is it going?',
    username: 'bob',
    user_id: 1,
    rap_post_id: 1,
  },
  {
    text: 'how is it going?',
    username: 'bob',
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
    followerID: 1,
    followeeID: 2,
  },
  {
    followerID: 2,
    followeeID: 1,
  },
  {
    followerID: 3,
    followeeID: 4,
  },
  {
    followerID: 4,
    followeeID: 5,
  },
  {
    followerID: 5,
    followeeID: 6,
  },
  {
    followerID: 6,
    followeeID: 5,
  },
  {
    followerID: 4,
    followeeID: 6,
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
  User_Like.sync({ force: false }).then(() =>
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
