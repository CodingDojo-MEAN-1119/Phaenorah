const mongoose = require('mongoose');
const express = require("express");
const app = express();
const session =  require("express-session");
const flash = require("express-flash");
// const moment = require("moment");
mongoose.Promise = global.Promise;


app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
app.use(flash());
app.use(session({
    secret: "cats",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))


mongoose.connect('mongodb://localhost/cats', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.once('connected', () => console.log('connected to Mongo'));

const CatSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    age: {type: Number, required: true, minlength: 3}, 
    favFood: {type: String, required: true, minlength: 3}, 
    spots: {type: String, required: true, minlength: 3}  
    }, {timestamps: true});  
   // create an object to that contains methods for mongoose to interface with MongoDB
const Cat = mongoose.model('Cat', CatSchema);

app.get('/', (req, res) => {  
    res.render("index");    
});

app.post('/cats', (req, res) => {
    const cat = new Quote();
    cat.name = req.body.name;
    cat.age = req.body.name;
    cat.favFood = req.body.name;
    cat.spots = req.body.name;
    cat.cat = req.body.quote;
    cat.save()
    .then(savedCat => {console.log(savedCat) 
        res.redirect('/cats')})
    .catch(err => {
        console.log("We have an error!", err);        
        for (var key in err.errors) {
            req.flash('catform', err.errors[key].message);
        }
        res.redirect('/');
    });
})

app.get('/cats', (req, res) => {  
    Cat.find({})
        .then(cats => {
            console.log(cats);
            res.render('cats', {cats: cats})})
        .catch(err => res.json(err));
               
});
app.listen(8000, () => console.log("listening on port 8000"));