/* eslint-disable no-unused-vars, camelcase */

const db = require('./index.js');
const User = require('./models/user.js');
const Rap_Post = require('./models/rap_post.js');
const Comment = require('./models/comment.js');
const User_Like = require('./models/user_like.js');
const Follow = require('./models/follow.js');
const Report_Post = require('./models/report_post.js');
const Friends = require('./models/friends.js');
const PersonalRhymes = require('./models/personalRhymes');
const SavedRhymes = require('./models/savedRhymes');

db.sync({ force: true })
  .then(() => {
    console.log('db synced');
    process.exit();
  })
  .catch(() => {
    console.log('error syncing database');
  });
