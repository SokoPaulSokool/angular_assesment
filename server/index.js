const path = require('path');
const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
var users = require('./users.js');
var books = require('./books.js');


app.use('/users', users);
app.use('/books', books);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
