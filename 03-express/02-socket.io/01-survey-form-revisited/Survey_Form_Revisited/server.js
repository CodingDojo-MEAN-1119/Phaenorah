const express = require("express");
const app = express();
const server = app.listen(1337);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {  
   res.render("index", {title: "my root route"});
})
io.on('connection', function (socket) {
   console.log("Connected!");
  socket.on("posting_form", function (data){
       var num = Math.floor(Math.random()*1000);
       var object = JSON.stringify(data);
      socket.emit('updated_message', {
           info: `You emitted the following information to the server: ${object}.`
       });
       socket.emit('random_number', {
           message:`Your lucky number emmitted by the server is: ${num}!`
       });
   });
});
