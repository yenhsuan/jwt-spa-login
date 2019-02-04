const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const logger = require('../utils/logger');
const userModel = require('../models/user');
const config = require('../config');

const login = express.Router();
login.use(bodyParser.urlencoded({ extended: false }));
login.use(bodyParser.json());

login.use((err, req, res, next) => {
  if (err) {
    logger.error(err);
    res.status(500).send({ error: 'Can not resolve request' });
    return;
  }
  next();
});

login.post('/signin', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401).send({ error: 'missing email/password field' });
    return;
  }

  userModel.findOne({ email }, (err, user) => {
    if (err) {
      logger.error(`Database error when logining user: ${email}`);
      res.status(502).send({ error: 'server error' });
      return;
    }

    if (!user) {
      logger.info(`User login failed - no user found: ${email}`);
      res.status(404).send({ error: 'email not exist' });
      return;
    }

    const isAuthed = bcrypt.compareSync(password, user.password);
    if (!isAuthed) {
      logger.info(`User login failed - wrong password: ${email}`);
      res.status(401).send({ error: 'invalid password' });
      return;
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 * 2,
    });

    res.status(200).send({ token });
  });
});

login.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(502).send({ error: 'invalid sign up info' });
    return;
  }

  userModel.findOne({ email }, (err, user) => {
    if (err) {
      logger.error(`Database error when signing up user: ${email}`);
      res.status(502).send({ error: 'server error' });
      return;
    }

    if (user) {
      logger.error(`Database error when signing up user: ${email}`);
      res.status(401).send({ error: 'User already exists' });
      return;
    }

    const encryptedPassword = bcrypt.hashSync(password, 10);
    userModel.create({ name, email, password: encryptedPassword }, (error) => {
      if (error) {
        logger.error(`Database error when signing up user: ${email}`);
        res.status(502).send({ error: 'server error' });
        return;
      }
      res.status(200).send({ message: 'successful signed up' });
    });
  });
});

module.exports = login;
