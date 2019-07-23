const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
});
const User = mongoose.model('User', userSchema);

const bookSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  userId: {
    type: String
  },
});
const Book = mongoose.model('Book', bookSchema);

const models = {User, Book}

module.exports =  models;