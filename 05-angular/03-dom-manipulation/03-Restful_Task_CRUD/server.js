const express = require("express");
const app = express();
const flash = require("express-flash");

app.use(express.static(__dirname + "/public/dist/public"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));
app.use(flash());


require('./server/config/database');
const routes = require('./server/config/api.routes.js');

app.use(express.json());

app.use(routes);

app.listen(8000, () => console.log("listening on port 8000"));
