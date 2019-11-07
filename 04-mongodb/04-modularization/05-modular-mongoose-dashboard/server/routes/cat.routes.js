const CatController = require('../controllers/controller');
const router = require('express').Router();

module.exports = router

.get('/', CatController.index)

.get('/cats/new', CatController.new)

.post('/cats', CatController.create)

.get('/cats/:id', CatController.show)

.get('/cats/edit/:id', CatController.edit)

.post('/:id', CatController.update)

.post('/cats/delete/:id', CatController.delete)