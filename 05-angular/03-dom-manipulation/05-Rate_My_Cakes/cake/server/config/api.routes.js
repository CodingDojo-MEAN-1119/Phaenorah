const ApiController = require('../controllers/controller');
const router = require('express').Router();

module.exports = router
  .get('/cakes', ApiController.index)

  .get('/cakes/:id',ApiController.show)

  .post('/cakes', ApiController.create)

  .post('/ratings/:cakeId', (req, res) => {
    cake.addRating(req, res); })

