const { BookController } = require('../controllers');
const router = require('express').Router();

// /books/alksejfhalskjf
module.exports = router
  .get('/', BookController.index)
  .post('/', BookController.create)
  .get('/:book_id', BookController.show)
  .put('/:book_id', BookController.update)
  .delete('/:book_id', BookController.destroy);
