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
    text: `And we don't stress
    A .38 'til it free your chest
    Then PP on the PO's desk
    I'm Jay Z in a blow out press
    Relate me to your blowout's best
    Can't heat me, I'm remote you're deaf
    I'm HD, causin' photo theft
    My AC antifreeze got a—that part
    Hold your breath, I'm 8 feet when I hold this TEC
    Protect me from the local threats
    My ID say my eye don't rest
    My IV qualify T-rex
    Society kept my IQ vexed
    Deny me from an Ivy school
    Applyin' me to the street I slept
    I quietly had to hold this tool
    Reminding me of the block I repped
    The turf I stepped, the church and the earth I blessed
    The first I guessed the alert was the murk I chef
    That hearse the flirt with perks of a kill confessed
    Dispersed the worst, the first 48 addressed
    The search and laws and verse of the birth I nest
    The—uh, the awe, the curse of a pose in zest
    The good, the flaws, the pain to reverse what's left, uh`,
    username: 'bob',
    user_id: 1,
    like_count: 3,
  },
  {
    text: `Sometimes I wake up, up in the morning, make up
    Wipe the smudge of makeup off my bed
    Soon as she’s gone and take up
    Hours out my day just to find power shit to say
    But you won't hear it
    Even if your ears was pierced with Beats by Dre
    I mean the sun is slowly falling, we all surely should die eventually
    So what's your calling? Oh you left your phone behind?
    Identity crises break mirrors, vices steer us through wickedness
    Jesus Christ is right near us and Devil said you owe ten percent
    Sold your soul, I know, sold your soul and you're hopeless
    My focus, stare at elopin' on boats that float in the open
    Of oceans that coast the line on the margins I rhyme, choking
    Or soaking up game, I'm hoping you picked the second ones
    Change the emotion of jealousy that you're holding
    You're telling me that you're golden but really cubic zirconia
    Let me see, I'll break you down like a pound of fire, whenever
    Your tactics are mighty clever but even if you Mayweather, you`,
    username: 'ben',
    user_id: 3,
    like_count: 0,
  },
  {
    text: `Tyger Tyger, burning bright
    In the forests of the night
    What immortal hand or eye
    Could frame thy fearful symmetry
    
    In what distant deeps or skies
    Burnt the fire of thine eyes
    On what wings dare he aspire
    What the hand, dare seize the fire
    
    And what shoulder, & what art
    Could twist the sinews of thy heart
    And when thy heart began to beat
    What dread hand? & what dread feet
    
    What the hammer? what the chain
    In what furnace was thy brain
    What the anvil? what dread grasp
    Dare its deadly terrors clasp
    
    When the stars threw down their spears
    And water'd heaven with their tears
    Did he smile his work to see
    Did he who made the Lamb make thee
    
    Tyger Tyger burning bright
    In the forests of the night
    What immortal hand or eye
    Dare frame thy fearful symmetry`,
    username: 'carl',
    user_id: 4,
    like_count: 0,
  },
  {
    text: `Stand on the highest pavement of the stair
    Lean on a garden urn
    Weave, weave the sunlight in your hair
    Clasp your flowers to you with a pained surprise
    Fling them to the ground and turn
    With a fugitive resentment in your eyes
    But weave, weave the sunlight in your hair
    
    So I would have had him leave
    So I would have had her stand and grieve
    So he would have left 
    As the soul leaves the body torn and bruised
    As the mind deserts the body it has used
    I should find
    Some way incomparably light and deft
    Some way we both should understand
    Simple and faithless as a smile and shake of the hand
    
    She turned away, but with the autumn weather
    Compelled my imagination many days
    Many days and many hours
    Her hair over her arms and her arms full of flowers
    And I wonder how they should have been together
    I should have lost a gesture and a pose
    Sometimes these cogitations still amaze
    The troubled midnight and the noon’s repose`,
    username: 'bob',
    user_id: 1,
    like_count: 0,
  },
  {
    text: `Let the bird of loudest lay
    On the sole Arabian tree
    Herald sad and trumpet be
    To whose sound chaste wings obey
    
    But thou shrieking harbinger
    Foul precurrer of the fiend
    Augur of the fever's end
    To this troop come thou not near
    
    From this session interdict
    Every fowl of tyrant wing
    Save the eagle, feather'd king
    Keep the obsequy so strict
    
    Let the priest in surplice white
    That defunctive music can
    Be the death-divining swan
    Lest the requiem lack his right
    
    And thou treble-dated crow
    That thy sable gender mak'st
    With the breath thou giv'st and tak'st
    'Mongst our mourners shalt thou go
    
    Here the anthem doth commence
    Love and constancy is dead
    Phoenix and the Turtle fled
    In a mutual flame from hence
    
    So they lov'd, as love in twain
    Had the essence but in one
    Two distincts, division none
    Number there in love was slain
    
    Hearts remote, yet not asunder
    Distance and no space was seen
    'Twixt this Turtle and his queen
    But in them it were a wonder
    
    So between them love did shine
    That the Turtle saw his right
    Flaming in the Phoenix' sight
    Either was the other's mine
    
    Property was thus appalled
    That the self was not the same
    Single nature's double name
    Neither two nor one was called
    
    Reason, in itself confounded
    Saw division grow together
    To themselves yet either neither
    Simple were so well compounded
    
    That it cried, "How true a twain
    Seemeth this concordant one
    Love has reason, reason none
    If what parts can so remain
    
    Whereupon it made this threne
    To the Phoenix and the Dove
    Co-supremes and stars of love
    As chorus to their tragic scene
    
                     threnos
    
    Beauty, truth, and rarity
    Grace in all simplicity
    Here enclos'd, in cinders lie
    
    Death is now the Phoenix' nest
    And the Turtle's loyal breast
    To eternity doth rests
    
    Leaving no posterity
    'Twas not their infirmity
    It was married chastity
    
    Truth may seem but cannot be
    Beauty brag but 'tis not she
    Truth and beauty buried be
    
    To this urn let those repair
    That are either true or fair
    For these dead birds sigh a prayer`,
    username: 'jen',
    user_id: 5,
    like_count: 0,
  },
  {
    text: `All I have in life is my new appetite for failure
    And I got hunger pain that grow insane
    Tell me, do that sound familiar
    If it do, then you're like me
    Makin' excuse that your relief
    Is in the bottom of the bottle and the greenest indo leaf
    As the window open I release
    Everything that corrode inside of me
    I see you jokin', why you laugh
    Don't you feel bad? I probably sleep
    And never ever wake up
    Never ever wake up, never ever wake up`,
    username: 'Samuel Hong',
    user_id: 6,
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
        console.log('updated reports');
      }));
};
