const Player = require('mongoose').model('Player');

module.exports = {
    index(req, res) {
      console.log('got to index');
        Player.find({})
        .then(players => res.json(players))
        .catch(err => res.json(err));
    },
    show(req, res) {
        Player.findById(req.params.id)
        .then(player => {
            res.json(player);
        })
        .catch(err => res.json(err));
    },
    create(req, res) {
        console.log(req.body);
        Player.create(req.body)
        .then(player => res.json(player))
        .catch(err => res.json(err));
    },
    update(req, res) {
        Player.findOneAndUpdate({uniqueId: req.params.id}, req.body,{new:true})
        .then(player => {
          console.log('player updated', player);
          res.json(player)})
        .catch(err => res.json(err));
    },
    delete(req, res) {
        Player.findByIdAndRemove(req.params.id)
        .then(player => res.json(player))
        .catch(err => res.json(err));
    },
};

