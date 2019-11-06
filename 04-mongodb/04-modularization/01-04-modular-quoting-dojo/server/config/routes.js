const QuoteController = require('../controllers/controller');

console.log(QuoteController);

module.exports = function(app) {

    app.get('/', QuoteController.index);

    app.post('/quotes',QuoteController.create);

    app.get('/quotes',QuoteController.show);    
}