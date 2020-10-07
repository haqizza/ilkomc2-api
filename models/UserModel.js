const mongoose = require('mongoose');

const Education = mongoose.Schema({
  name: String,
  enter: String,
  finish: String
});

const Achievement = mongoose.Schema({
  name: String,
  year: String,
  desc: String
});

const Portfolio = mongoose.Schema({
  name: String,
  link: String
});

const UserSchema = mongoose.Schema({
  name: String,
  profession: String,
  birthday: String,
  address: String,
  city: String,
  phoneNumber: String,
  email: String,
  photo: String,
  bio: String,
  education: [{ type: Education }],
  achievement: [{ type: Achievement }],
  portfolio: [{ type: Education }]
});

module.exports = mongoose.model('Users', UserSchema);