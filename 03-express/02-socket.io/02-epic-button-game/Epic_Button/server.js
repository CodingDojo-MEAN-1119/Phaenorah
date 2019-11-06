// NOT COMPLETE******
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
        newCount : `The button has been pushed ${counter} times(s)!`
    });
    socket.broadcast.emit("new_count", {
        newCount : `The button has been pushed ${counter} times(s)!`
    });
    socket.on("epic_push", function(){
        counter += 1;
        socket.emit("new_count", {
            newCount : `The button has been pushed ${counter} times(s)!`
        });
        socket.broadcast.emit("new_count", {
            newCount : `The button has been pushed ${counter} times(s)!`
        });
    })
    socket.on("reset_push", function(){
        counter = 0;
        socket.emit("reset_count", {
            newCount : `The button has been pushed ${counter} times(s)!`
        });
        socket.broadcast.emit("reset_count", {
            newCount : `The button has been pushed ${counter} times(s)!`
        });
    })
})
