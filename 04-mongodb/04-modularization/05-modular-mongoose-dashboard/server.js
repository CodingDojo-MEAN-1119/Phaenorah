const mongoose = require('mongoose');
const express = require("express");
const app = express();
const session =  require("express-session");
const flash = require("express-flash");
// const moment = require("moment");
// mongoose.Promise = global.Promise;


app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(flash());
app.use(session({
    secret: "cats",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

require('./server/config/database');
const routes = require('./server/routes/cat.routes.js');


app.use(routes);


app.listen(8000, () => console.log("listening on port 8000"));
