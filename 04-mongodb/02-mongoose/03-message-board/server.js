const mongoose = require('mongoose');
const express = require("express");
const app = express();
const session =  require("express-session");
const flash = require("express-flash");
// const moment = require("moment");
mongoose.Promise = global.Promise;
const bodyParser = require('body-parser');

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
    secret: "cats",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

mongoose.connect('mongodb://localhost/message_board', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.once('connected', () => console.log('connected to Mongo'));

const CommentSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "A first name is required"],
        minlength: 3
    },
    comment: {
        type: String, 
        required: [true, "Comment field can not be left blank!"], 
        minlength: 3
    },
    }, 
    {timestamps: true});  

const MessageSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Your name is required!"], 
        minlength: 3
    },
    message: {
        type: String, 
        required: [true, "Message field can not be left blank!"], 
        minlength: 3
    },
    comments: [CommentSchema]
    }, 
    {timestamps: true})
   
const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);

app.get('/', (req, res) => { 
    Message.find({})    
    .then(messages => {      
      res.render('index', { messages });
    })   
});
app.post('/messages', (req, res) => {
    const message = new Message();
    message.name = req.body.name;
    message.message = req.body.message;     
    message.save()
    .then(savedMessage => {console.log(savedMessage) 
        res.redirect('/')})
    .catch(err => {
        console.log("We have an error!", err);        
        for (var key in err.errors) {
            req.flash('messageform', err.errors[key].message);
        }
        res.redirect('/')
    });
})
app.post('/comments', (req, res) => {
    Comment.create(request.body)
    .then(comment => {
      console.log(comment);

      return Message.findById(comment.message)
      .then(message => {
          message.comments.push(comment);
          return message.save();
      })
      .then(() => {
            response.redirect('/');
      });
    })
    .catch(err => {
        console.log("We have an error!", err);        
        for (var key in err.errors) {
            req.flash('commentform', err.errors[key].message);
        }
        res.redirect('/');
    });
})



app.listen(8000, () => console.log("listening on port 8000"));