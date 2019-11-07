const QuoteController = require('../controllers/controller');
const router = require('express').Router();

module.exports = router
  .get('/', QuoteController.index)

  .post('/quotes', QuoteController.create)
  
  .get('/quotes',QuoteController.show); 