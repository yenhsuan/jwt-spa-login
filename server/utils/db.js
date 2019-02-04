const mongoose = require('mongoose');
const config = require('../config');

const {
  host,
  name,
  port,
  user,
  password,
} = config.database;

mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${name}`, { useNewUrlParser: true });
module.exports = mongoose;
