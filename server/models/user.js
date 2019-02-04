const mongoose = require('../utils/db');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

mongoose.model('User', userSchema);
module.exports = mongoose.model('User');