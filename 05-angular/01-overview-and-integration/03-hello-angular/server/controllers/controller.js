const Task = require('mongoose').model('Task');

module.exports = {
    index(req, res) {
        Task.find({})        
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err));
    },
    show(req, res) {
        Task.findById(req.params.id)
        .then(task => {
            res.json(task);
        })
        .catch(err => res.json(err));
    },  
    create(req, res) {
        console.log(req.body);
        Task.create(req.body)
        .then(task => res.json(task))
        .catch(err => res.json(err));
    },
    update(req, res) {
        Task.findByIdAndUpdate(req.params.id, req.body,{new:true})
        .then(task => res.json(task))
        .catch(err => res.json(err));
    },    
    delete(req, res) {
        Task.findByIdAndRemove(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.json(err));
    },
};

