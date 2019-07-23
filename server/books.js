var express = require('express');
var router = express.Router();
var models = require('./models');
var User = models.User;
var Book = models.Book;

bookList = [];

var returnBook = data => {
  return {
    title: data.title,
    description: data.description,
    userId: data.userId,
    id: data.id
  };
};

// router.get(':slug', function (req, res, next) {
//    if (req.params.slug ) {
//       return next();
// }

//   // get user data and render
//   res.render('user', userdata);
// });

router.post('', async (req, res) => {
  var bookData = req.body;
  console.log(req.params.slug);
  if (
    bookData.hasOwnProperty('userId') &&
    bookData.hasOwnProperty('title') &&
    bookData.hasOwnProperty('description')
  ) {
    var book1 = new Book(bookData);
    var createdBook = await book1.save();
    if (createdBook) {
      console.log(createdBook);
      res.status(200).json({ success: true, data: returnBook(createdBook) });
    } else {
      res.status(200).json({
        success: false,
        message: 'Failed to create book',
        data: bookData
      });
    }
  } else {
    res.status(200).json({
      success: false,
      message: 'Some fields are missing',
      data: bookData
    });
  }
});

router.delete('/:slug', async (req, res) => {
  var bookData = req.body;
  var bookId = req.params.slug;
  var userId = req.query.userId;
  if (userId) {
    if (bookId) {
      var deletedBook = await Book.findOneAndDelete({
        _id: bookId,
        userId: userId
      });
      if (deletedBook) {
        res
          .status(200)
          .json({ success: true, message: 'Book was deleted', data: bookData });
      } else {
        res.status(200).json({
          success: false,
          message: 'Failed to delete book',
          data: bookData
        });
      }
    } else {
      res.json({ message: 'Book Id not set', success: false });
    }
  } else {
    res.json({ message: 'UserId not set in query params', success: false });
  }
});

router.put('/:slug', async (req, res) => {
  bookData = req.body;
  var bookId = req.params.slug;
  newBook = { ...bookData };
  delete newBook.id;
  var userId = req.query.userId;
  if (userId) {
    if (bookId) {
      editedBook = await Book.findOneAndUpdate(
        { _id: bookId, userId: userId },
        newBook
      );
      if (editedBook) {
        res.status(200).json({ success: true, data: bookData });
      } else {
        res.status(200).json({ success: false, data: bookData });
      }
    } else {
       res.json({ message: 'Book Id not set', success: false });
    }
  } else {
    res.json({ message: 'UserId not set in query params', success: false });
  }
});

router.get('/:slug', async (req, res, next) => {
  var bookId = req.params.slug;
  var userId = req.query.userId;
  if (userId) {
    if (bookId) {
      var obtainedBooks = await Book.find({ _id: bookId, userId });
      var books = [];
      if (obtainedBooks) {
        books = obtainedBooks.map(book => {
          return returnBook(book);
        });
      }
      res.json(books);
    } else {
      res.json({ message: 'Book Id not set', success: false });
    }
  } else {
    res.json({ message: 'UserId not set in query params', success: false });
  }
});

router.get('', async (req, res, next) => {
  var userId = req.query.userId;
  if (userId) {
    var obtainedBooks = await Book.find({ userId });
    var books = [];
    if (obtainedBooks) {
      books = obtainedBooks.map(book => {
        return returnBook(book);
      });
    }
    res.json(books);
  } else {
    res.json({ message: 'UserId not set in query params', success: false });
  }
});

module.exports = router;
