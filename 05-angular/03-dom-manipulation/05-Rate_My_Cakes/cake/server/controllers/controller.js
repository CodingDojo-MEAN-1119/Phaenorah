const Cake = require('mongoose').model('Cake');
const Rating = require('mongoose').model('Rating');

module.exports = {
    index(req, res) {
      console.log('got to index');
      Cake.find({})
        .then(cakes => res.json(cakes))
        .catch(err => res.json(err));
    },
    show(req, res) {
      console.log('found cake');
      Cake.findById(req.params.id)
        .then(cake => {
            res.json(cake);
        })
        .catch(err => res.json(err));
    },
    create(req, res) {
      console.log(req.body);
      Cake.create(req.body)
        .then(cake => res.json(cake))
        .catch(err => res.json(err));
    },
    addRating(req, res) {
      console.log(req.body);
      Rating.create({rating: req.body.rating, comment: req.body.comment}, function(err, newRating){
        console.log(req.body)
        if(err){
            res.json({message: "Error!", error: err});
        }
        else{
            Cake.findOneAndUpdate({_id: req.params.cakeId}, {$push: {ratings: newRating}}, function(err, data){
                if(err){
                    res.json({message: "Error!", error: err});
                }
                else{
                    res.json({message: "Success!", added: true});
                }
            })
        }
    })
  }
};

