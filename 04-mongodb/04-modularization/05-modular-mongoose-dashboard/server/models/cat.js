const mongoose = require('mongoose');
const { Schema } = mongoose;

const CatSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        minlength: 3
    },
    age: {
        type: Number, 
        required: true
    }, 
    favFood: {
        type: String, 
        required: true, 
        minlength: 3
    }, 
    spots: {
        type: String, 
        required: true, 
        minlength: 3
    },  
    }, {timestamps: true});  

    module.exports = mongoose.model('Cat', CatSchema);