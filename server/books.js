var express = require('express');
var router = express.Router();


bookList = [];

router.get('', (req, res) => {
  res.json(bookList);
});

router.post('/createBook', (req, res) => {
   var userData = req.body;
  bookList.push({ ...userData, id: bookList.length + 1 });
  res.status(200).json({success: true,data: userData});
});

router.post('/deleteBook', (req, res) => {
  var userData = req.body;
    bookList = bookList.filter(book => {
      if (book.id === userData.id) {
        return false;
      }
      return true;
    }); 
  res.status(200).json({success: true,data: userData});
});

router.put('/editBook', (req, res) => {
  userData = req.body;
  bookList = bookList.map(book => {
      if (book.id === userData.id) {
        return userData;
      }
      return book;
    });
  res.status(200).json({success: true,data: userData});
});

module.exports = router;

