const ApiController = require('../controllers/controller');
const router = require('express').Router();

module.exports = router
  .get('/players', ApiController.index)

  .get('/players/:id',ApiController.show)

  .post('/players/new', ApiController.create)

  .put('/players/:id', ApiController.update)

  .delete('/players/:id',ApiController.delete);
