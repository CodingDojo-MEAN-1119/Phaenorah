const People = require('mongoose').model('People');

module.exports = {

    index(req, res) {
        People.find({})
        .then(people => res.json(people))
        .catch(err => res.json(err));
    },
    new(req, res) {
        People.create({name:req.params.name})
        then(people => res.json(people))
        .catch(err => res.json(err));
    },    
    show(req, res) {
        People.findOne({name:req.params.name})
        .then(people => {
            res.json(people ? people: "No such Person Existed in  1955");
        })
        .catch(err => res.json(err));
    },  
    delete(req, res) {
        People.remove({name:req.params.name})
        .then(people => res.json(people))
        .catch(err => res.json(err));
    },
};

