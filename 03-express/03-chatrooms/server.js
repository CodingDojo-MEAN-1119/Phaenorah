const express = require("express");
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);


app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
  res.render("index");
 });

const users = {};
const posts = [];

class User {
  constructor(user_id, user_name) {
    this.id = user_id;
    this.name = user_name;
  }
}
class Post {
  constructor(message, user) {
    this.message = message;
    this.user = user;
  }
}

io.on('connection', function (socket) {

  socket.on("got_new_user", function(data) {
    const user = new User(socket.id, data);
    users[user.id] = user;
    console.log('user', user);
    socket.emit('all_posts', posts);  //EMIT for new user
    socket.broadcast.emit('e', posts);          //EMIT new users to existing users
    socket.emit('all_posts', posts);  //EMIT all users to new users
  });
  socket.on("new_post", function({post,user}) {
    const post = new Post(post, user);
    posts.push(post);
    io.emit("post_new_post", post);
  });
})
