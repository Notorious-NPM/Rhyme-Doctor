// need DB helpers

const upvoteCtrl = (req, res) => {
  res.status(201).end('Woo voted!');
};

const downvoteCtrl = () => {

};

export { upvoteCtrl, downvoteCtrl };
