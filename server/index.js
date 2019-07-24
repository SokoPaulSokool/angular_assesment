const path = require('path');
const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

var users = require('./users.js');  
var books = require('./books.js');
 
// var connectionString = 'mongodb://127.0.0.1:27017'; 
var connectionString = 'mongodb://mongo:27017'; 
 
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
setTimeout(() => {
  mongoose.connect(
  connectionString + '/books',
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      console.error(
        '\x1b[31m',
        '\nFailed to connect to database. \n\nCheck the README.md file for instructions\n'
      );
    }
  }
);
}, 5000);


mongoose.connection.once('open', async () => {
  app.use('/users', users);
  app.use('/books', books);
  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.');
  });
});
