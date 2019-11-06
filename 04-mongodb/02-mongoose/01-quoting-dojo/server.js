const mongoose = require('mongoose');
const express = require("express");
const app = express();
const session =  require("express-session");
const flash = require("express-flash");
const moment = require("moment");
mongoose.Promise = global.Promise;


app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
app.use(flash());
app.use(session({
    secret: "quotes",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))


mongoose.connect('mongodb://localhost/quoting_dojo', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.once('connected', () => console.log('connected to Mongo'));

const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, minlength: 3},
    }, {timestamps: true});  
   // create an object to that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', QuoteSchema);

app.get('/', (req, res) => {  
    res.render("index");    
});

app.post('/quotes', (req, res) => {
    const quote = new Quote();
    quote.name = req.body.name;
    quote.quote = req.body.quote;
    quote.save()
    .then(savedQuote => {console.log(savedQuote) 
        res.redirect('/quotes')})
    .catch(err => {
        console.log("We have an error!", err);
        // adjust the code below as needed to create a flash message with the tag and content you would like
        for (var key in err.errors) {
            req.flash('quoteform', err.errors[key].message);
        }
        res.redirect('/');
    });
})

app.get('/quotes', (req, res) => {  
    Quote.find({})
        .then(quotes => {
            console.log(quotes);
            res.render('quotes', {quotes: quotes, moment: moment})})
        .catch(err => res.json(err));
               
});
app.listen(8000, () => console.log("listening on port 8000"));