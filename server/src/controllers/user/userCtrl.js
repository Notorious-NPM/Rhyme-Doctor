// need DB helpers
import { addFriendHelper, unFriendHelper } from '../../database/dbHelpers/friendHelpers';

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
  //pass down req.body
  console.log(req.body);
  res.status(201).send('reached addfriend');
};

const unfriendCtrl = () => {

};

export { loginCtrl, signupCtrl, followCtrl, unfollowCtrl, addfriendCtrl, unfriendCtrl };
