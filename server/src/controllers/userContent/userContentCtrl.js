import { getUserPostsHelper, getUserDataHelper, addUserImageHelper } from '../../database/dbHelpers/userContentHelpers';

const getUserPostsCtrl = (req, res) => {
  // Get all user posts
  // res.status(200).send(console.log(req.user));
  getUserPostsHelper(req.user)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err));
};


const getUserDataCtrl = (req, res) => {
  // Get all user data
  getUserDataHelper(req.user)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err));
};

const addImageCtrl = (req, res) => {
  // Add image url to DB
  let userId = req.user.id;
  let imageUrl = req.body.image;
  addUserImageHelper(userId, imageUrl)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err));
};

export { getUserPostsCtrl, getUserDataCtrl, addImageCtrl };
