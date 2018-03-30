const gateway = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).end('You must be logged in to do this!');
  }
};

export default gateway;
