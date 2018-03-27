import { getUserPostsHelper, getUserDataHelper, addUserImageHelper, addUserBioHelper } from '../../database/dbHelpers/userContentHelpers';

const getUserPostsCtrl = (req, res) => {
  // Get all user posts
  let param = req.user;
  if (req.user.id && req.query.name) {
    param = req.query;
  }
  getUserPostsHelper(param)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err));
};

const getUserDataCtrl = (req, res) => {
  // Get all user data
  let param = req.user;
  if (req.user.id && req.query.name) {
    param = req.query;
  }
  getUserDataHelper(param)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err));
};

const addImageCtrl = (req, res) => {
  // Add image url to DB
  const userId = req.user.id;
  const imageUrl = req.body.image;
  addUserImageHelper(userId, imageUrl)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err));
};

const addBioCtrl = (req, res) => {
  // Add bio to DB
  const userId = req.user.id;
  const bio = req.body.bio;
  addUserBioHelper(userId, bio)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err));
};


export { getUserPostsCtrl, getUserDataCtrl, addImageCtrl, addBioCtrl };
