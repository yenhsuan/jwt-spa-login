const jwt = require('jsonwebtoken');
const config = require('../config');

const verifyToken = function verifyTokenInRequestHeader(req, res, next) {
  const { authorization } = req.headers;
  let token;

  if (authorization.startsWith('Bearer ')) {
    token = authorization.substring(7);
  }

  if (!token) {
    res.status(401).send({ auth: false, message: 'No token provided.' });
    return;
  }

  if (!config.secret) {
    throw new Error('ERROR: No secert');
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      res.status(401).send({ auth: false, message: 'Unauthorized Token' });
      return;
    }

    req.decoded = decoded;
    next();
  });
};

module.exports = {
  verifyToken,
};
