const express = require("express");
const app = express();
app.get('/', (request, response) => {
   response.send("I love Express");
});
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/cats", (req, res) => {
   res.render('cats');
})
app.get("/tommy", (req, res) => { 

   var details = [
       {name: "Tommy", 
       pic: "cat1.jpg",
       favFood: "mice",
       age: "7",
       spots: ["On the couch"," On the bed", " Under the car"]
      }
       
   ];
   res.render('details', {cats: details});
})
app.get("/jaguar", (req, res) => {  
   var details = [
       {name: "Jaguar", 
       pic: "myfavcat.jpg",
       favFood: "meat",
       age: "6",
       spots: ["On trees"," By the lake", " In the woods"]
      }
       
   ];
   res.render('details', {cats: details});
})
app.get("/jag", (req, res) => {
   var details = [
       {name: "Jag", 
       pic: "jaguar.jpg",
       favFood: "mice",
       age: "10",
       spots: ["On the couch"," On the bed", " Under the car"]
      }       
   ];
   res.render('details', {cats: details});
})