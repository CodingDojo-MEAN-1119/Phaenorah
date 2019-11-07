const Cat = require('mongoose').model('Cat');

module.exports = {

    index(req, res) {
        Cat.find({})
        .then(cats => {
            res.render("index", {cats}); 
        })
    },
    new(req, res) {
        const cat = new Cat();
        res.render("new");
    },
    create(req, res) {
        const cat = new Cat();
    cat.name = req.body.name;
    cat.age = req.body.age;
    cat.favFood = req.body.favFood;
    cat.spots = req.body.spots;
    cat.cat = req.body.cat;
    cat.save()
    .then(savedCat => {console.log(savedCat) 
        res.redirect('/')})
    .catch(err => {
        console.log("We have an error!", err);        
        for (var key in err.errors) {
            req.flash('catform', err.errors[key].message);
        }
        res.redirect('/cats/new');
    });
    },
    show(req, res) {
        Cat.find({ _id: req.params.id}, function(err, response) {
            if (err) { console.log(err); }
            res.render('show', { cat: response[0] });
        }); 
    },
    edit(req, res){
        Cat.find({ _id: req.params.id}, function(err, response) {
            if (err) { console.log(err); }
            res.render('edit', { cat: response[0] });
          })
    },
    update(req, res) {
        Cat.update({_id:req.params.id}, req.body, function(err){
            if (err) { console.log(err); }
            res.redirect('/');
        });
    },
    delete(req, res) {
        Cat.remove({_id: req.params.id})
    .then(cat => {
        res.redirect('/')})
        .catch(err => res.json(err)) 
    },

};