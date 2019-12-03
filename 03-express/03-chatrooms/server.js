const express = require("express");
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);

const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
  console.log("Value of name in session: ", req.session.name);
  res.render("index");
 });
app.post('/', (req, res) => {
  req.session.name = req.body.name;
  res.redirect('/');
});

const users = [];
const messages = [];

function isUser(user) {
  const usersCount = users.length;

  for (var i = 0; i < usersCount; i++) {
    if (user == users[i]) {
      return true;
    }
  }
  return false;
}

io.on('connection', function (socket) {

  socket.on("got_a_new_user", function(data) {
    const existingUser = isUser(data.user);
      const event = existingUser ? 'existing_user' : 'load_messages';
      const data = existingUser ? {
                    error: "This user already exits"
                  } : { current_user: data.user, messages: messages };

      if (!existingUser) {
        users.push(data.user);
      }
      socket.broadcast.emit(data, event);
      });
    socket.on("new_message", function(data) {
      messages.push({ name: data.user, message: data.message });
      socket.broadcast.emit("post_new_message", { new_message: data.message, user: data.user });
    });
})
