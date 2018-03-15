import Rap_Post from '../../database/models/rap_post.js';
import User from '../../database/models/user.js';

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

const getPostsCtrl = (req, res) => {
  // Gets all rap posts. Joins user table to get associated data.
  Rap_Post.findAll({ include: [User] })
    .then((rapPost) => {
      res.status(200).send(rapPost);
    });
};

export { createPostCtrl, deletePostCtrl, commentCtrl, uncommentCtrl, reportCtrl, getPostsCtrl };
