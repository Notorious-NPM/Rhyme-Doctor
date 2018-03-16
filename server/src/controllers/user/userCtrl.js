// need DB helpers
import { addFriendHelper, queryFriendHelper, unFriendHelper } from '../../database/dbHelpers/friendHelpers';

const followCtrl = () => {
  // user/follow id exists ? declines request : registers follow request
};

const unfollowCtrl = () => {
  // user/follow id exists ? registers unfollow request : declines request
};

const addfriendCtrl = (req, res) => {
  // input: user_id and friend_id
  // output: friendship object
  addFriendHelper(req.body)
    .then(result => res.status(201).send(result))
    .catch(err => res.status(201).send(err));
};

const queryfriendCtrl = (req, res) => {
  // input: user_id
  // output: all friendships array
  queryFriendHelper(req.user.id)
    .then(result => res.status(201).send(result))
    .catch(err => res.status(404).send(err));
};

const unfriendCtrl = (req, res) => {
  // input: user_id and friend_id
  // output: 'success' string
  unFriendHelper(req.body);
  res.status(201).send('success');
};

export {
  followCtrl,
  unfollowCtrl,
  addfriendCtrl,
  queryfriendCtrl,
  unfriendCtrl,
};
