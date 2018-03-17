// need DB helpers
import { addFriendHelper, queryFriendHelper, unFriendHelper } from '../../database/dbHelpers/friendHelpers';

const followCtrl = () => {
  // user/follow id exists ? declines request : registers follow request
};

const unfollowCtrl = () => {
  // user/follow id exists ? registers unfollow request : declines request
};

const addfriendCtrl = (req, res) => {
  addFriendHelper(req.user.id, req.body.friendID)
    .then(result => res.status(201).send(result))
    .catch(err => res.status(201).send(err));
};

const queryfriendCtrl = (req, res) => {
  queryFriendHelper(req.user.id)
    .then((results) => {
      const friends = results.dataValues.friend;
      const friendsArr = [];
      friends.forEach(({ dataValues }) => {
        const friendInfo = {};
        // console.log('**: ', dataValues.friends.dataValues);
        friendInfo.name = dataValues.name;
        // friendInfo.friendID = dataValues.id;
        friendInfo.roomID = dataValues.friends.dataValues.roomID;
        friendsArr.push(friendInfo);
      });
      console.log('Friends array: ', friendsArr);
      res.status(201).send(friendsArr);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
};

const unfriendCtrl = (req, res) => {
  // input: user_id and friend_id
  // output: 'success' string

  unFriendHelper(req.user.id, req.body.friendID);
  res.status(201).send('success');
};

export {
  followCtrl,
  unfollowCtrl,
  addfriendCtrl,
  queryfriendCtrl,
  unfriendCtrl,
};
