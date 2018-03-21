// need DB helpers
import { addFriendHelper, queryFriendHelper, unFriendHelper, checkIfFriends } from '../../database/dbHelpers/friendHelpers';
import User from '../../database/models/user';

const followCtrl = () => {
  // user/follow id exists ? declines request : registers follow request
};

const unfollowCtrl = () => {
  // user/follow id exists ? registers unfollow request : declines request
};

const queryfriendCtrl = (req, res) => {
  queryFriendHelper(req.user.id)
    .then((results) => {
      const friends = results.dataValues.friend;
      const friendsArr = [];
      friends.forEach(({ dataValues }) => {
        const friendInfo = {};
        friendInfo.name = dataValues.name;
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

const checkFriendshipCtrl = (req, res) => {
  console.log('checkFriendship data: ', req.user.id, ' and ', req.query.username);

  checkIfFriends(req.user.id, req.query.username)
    .then(({ dataValues }) => {
      const result = req.query.username === dataValues.friend[0].dataValues.name;
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(200).send('false');
    });
};

const addfriendCtrl = async (req, res) => {
  let friend;
  if (req.user.id) {
    friend = await User.findOne({
      where: {
        name: req.body.username,
      },
      attributes: { exclude: ['password'] },
    });
  }

  await addFriendHelper(req.user.id, friend.dataValues.id);
  res.status(201).send('new friendship created');
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
  checkFriendshipCtrl,
};
