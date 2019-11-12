const ApiController = require('../controllers/controller');
const router = require('express').Router();

module.exports = router
  .get('/tasks', ApiController.index)
  
  .get('/tasks/:id',ApiController.show) 
  
  .post('/tasks', ApiController.create)

  .put('/tasks/:id', ApiController.update)

  .delete('/tasks/:id',ApiController.delete);