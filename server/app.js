const express = require('express');
const cors = require('cors');
const login = require('./routes/auth');

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}

app.use('/api/auth', login);

module.exports = app;
