const mongoose = require('mongoose');
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/users', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.once('connected', () => console.log('connected to Mongo'));

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
   // create an object to that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

app.post('/users', (req, res) => {
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
        .then(newUserData => console.log('user created: ', newUserData))
        .catch(err => console.log(err));    
    res.redirect('/');
})
app.get('/', (req, res) => {  
User.find()
    .then(data => res.render("index", {users: data}))
    .catch(err => res.json(err));
});
app.listen(8000, () => console.log("listening on port 8000"));