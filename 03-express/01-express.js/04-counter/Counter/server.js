const express = require("express");
const app = express();
const session = require('express-session');

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.get("/", (req, res) => {
   if(req.session.counter == null){
      req.session.counter = 1;
   }
   else {
      req.session.counter += 1;
   }
   res.render("index", {counter : req.session.counter});
})
app.post('/addtwo', (request, response) => {
   req.session.counter += 2;
   res.redirect("/");
})
app.post("/reset", (req, res) =>{
   req.session.destroy;
   res.redirect("/");
})

app.listen(8000, () => console.log("listening on port 8000"));