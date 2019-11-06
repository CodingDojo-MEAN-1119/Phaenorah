const Quote = require('mongoose').model('Quote');
const moment = require("moment");

module.exports = {

    index(req, res) {
        console.log('serving quotes index');
        res.render("index"); 

    },
    create(req, res) {
        const quote = new Quote();
        quote.name = req.body.name;
        quote.quote = req.body.quote;
        quote.save()
        .then(savedQuote => {console.log(savedQuote) 
        res.redirect('/quotes')})
        .catch(err => {
            console.log("We have an error!", err);        
            for (var key in err.errors) {
                req.flash('quoteform', err.errors[key].message);
            }
            res.redirect('/');
        });
    },
    show(req, res) {
        console.log('show');
        Quote.find({})
        .then(quotes => {
            console.log(quotes);
            // throw new Error("please")
            res.render('quotes', {quotes: quotes, moment: moment})
        })
        .catch(err => 
            {
                res.json(err)
            console.log("yay", err)
            });
    },
};

