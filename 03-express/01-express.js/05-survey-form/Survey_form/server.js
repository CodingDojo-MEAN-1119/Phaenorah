const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
   res.render("index", {title: "my root route"});
})
app.post('/result',(req,res) => {
   results = req.body
   res.render('result', {results: results});
});

app.listen(8000, () => console.log("listening on port 8000"));
