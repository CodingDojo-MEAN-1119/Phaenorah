const mongoose = require('mongoose');
console.log('creating people model');
const { Schema } = mongoose;

const PeopleSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        minlength: 3
    },    
    }, {timestamps: true});  

    module.exports = mongoose.model('People', PeopleSchema);