const ApiController = require('../controllers/controller');
const router = require('express').Router();

module.exports = router
  .get('/', ApiController.index)

  .get('/new/:name', ApiController.new)
  
  .get('/:name',ApiController.show) 

  .get('/remove/:name',ApiController.delete);