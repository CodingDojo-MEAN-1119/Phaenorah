//build the app described in the mockup below using Express and sockets.
//Your app should serve only a single view, index.ejs.  Any time the epic button is pushed,
//the count should update on every user who is connected via sockets. This should happen in real time.
//If a user clicks the reset button, the count should reset to 0 for every user as well!

const express = require("express");
const app = express();
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;

app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.render("index", {title: "my root route"});
 })

io.on('connection', function (socket) {

    socket.emit("new_count", {
        newCount: `This button has been pushed ${counter} times(s)!`
  });
    socket.on("epic_push", function() {
        counter +=1;
      socket.emit("new_count", {
        newCount: `The button has been pushed ${counter} times(s)!`
    });
    socket.broadcast.emit("new_count", {
      newCount: `The button has been pushed ${counter} times(s)!`
    });
    io.emit("new_count", {
    newCount: `The button has been pushed ${counter} times(s)!`
    });
  })
    socket.on("reset_push", function(){
        counter = 0;
    socket.emit("reset_count", {
      newCount: `The button has been pushed ${counter} times(s)!`    //socket.emit('updateClient')
    });
    socket.broadcast.emit("reset_count", {
      newCount: `The button has been pushed ${counter} times(s)!`    //socket.broadcast.emit('updateAllExceptOne')
    });
    io.emit("reset_count", {
    newCount: `The button has been pushed ${counter} times(s)!`    //io.emit('updateAllClients')
    });
  })
})
