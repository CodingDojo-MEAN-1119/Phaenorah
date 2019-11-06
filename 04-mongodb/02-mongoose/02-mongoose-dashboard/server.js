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
    age: {type: Number, required: true}, 
    favFood: {type: String, required: true, minlength: 3}, 
    spots: {type: String, required: true, minlength: 3}  
    }, {timestamps: true});  
   // create an object to that contains methods for mongoose to interface with MongoDB
const Cat = mongoose.model('Cat', CatSchema);

app.get('/', (req, res) => {
    Cat.find({})
    .then(cats => {
        res.render("index", {cats}); 
    })  
});

app.get('/cats/new',(req, res) => { 
    res.render("new");
});

app.post('/cats', (req, res) => {
    const cat = new Cat();
    cat.name = req.body.name;
    cat.age = req.body.age;
    cat.favFood = req.body.favFood;
    cat.spots = req.body.spots;
    cat.cat = req.body.cat;
    cat.save()
    .then(savedCat => {console.log(savedCat) 
        res.redirect('/')})
    .catch(err => {
        console.log("We have an error!", err);        
        for (var key in err.errors) {
            req.flash('catform', err.errors[key].message);
        }
        res.redirect('/cats/new');
    });
})

app.get('/cats/:id', (req, res) => {  
    Cat.find({ _id: req.params.id}, function(err, response) {
        if (err) { console.log(err); }
        res.render('show', { cat: response[0] });
    });               
});

app.get('/cats/edit/:id', (req, res) => {  
    Cat.find({ _id: req.params.id}, function(err, response) {
        if (err) { console.log(err); }
        res.render('edit', { cat: response[0] });
      })        
});

app.post('/:id',(req, res) => { 
    Cat.update({_id:req.params.id}, req.body, function(err){
        if (err) { console.log(err); }
        res.redirect('/');
    });
});

app.post('/cats/delete/:id',(req, res) => {
    Cat.remove({_id: req.params.id})
    .then(this_cat => {
        res.redirect('/')})
        .catch(err => res.json(err))      
}); 

app.listen(8000, () => console.log("listening on port 8000"));