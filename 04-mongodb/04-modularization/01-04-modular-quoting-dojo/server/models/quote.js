const mongoose = require('mongoose');
console.log('creating quote model');
const { Schema } = mongoose;

const QuoteSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        minlength: 3
    },
    quote: {
        type: String, 
        required: true, 
        minlength: 3
    },
    }, {timestamps: true});  

    module.exports = mongoose.model('Quote', QuoteSchema);