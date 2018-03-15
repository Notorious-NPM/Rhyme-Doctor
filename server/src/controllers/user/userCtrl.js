// need DB helpers
import { addFriendHelper, queryFriendHelper, unFriendHelper } from '../../database/dbHelpers/friendHelpers';

const loginCtrl = () => {
  // username/password exists ? return userinfo : declines request
};

const signupCtrl = () => {
  // username/password exists ? declines request : registers and returns userinfo
};

const followCtrl = () => {
  // user/follow id exists ? declines request : registers follow request
};

const unfollowCtrl = () => {
  // user/follow id exists ? registers unfollow request : declines request
};

const addfriendCtrl = (req, res) => {
  // input: user_id and friend_id
  // output: friendship
  addFriendHelper(req.body)
    .then(result => res.status(201).send(result))
    .catch(err => res.status(404).send(err));
};

const queryfriendCtrl = (req, res) => {
  // input: user_id
  // output: all friendships
  queryFriendHelper(req.query)
    .then(result => res.status(201).send(result))
    .catch(err => res.status(404).send(err));
};

const unfriendCtrl = (req, res) => {
  // input: user_id and friend_id
  // output: deleted friendship
  unFriendHelper(req.body);
  res.status(201).send('success');
};

export {
  loginCtrl,
  signupCtrl,
  followCtrl,
  unfollowCtrl,
  addfriendCtrl,
  queryfriendCtrl,
  unfriendCtrl,
};
