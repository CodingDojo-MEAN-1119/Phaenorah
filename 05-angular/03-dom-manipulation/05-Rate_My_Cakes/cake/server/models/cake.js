const mongoose = require('mongoose');

const { Schema } = mongoose;

const RatingSchema = new Schema({
  rating: {
    type: Number
  },
  comment: {
    type: String,
    default: ""
  },
}, {timestamps: true});

const CakeSchema = new Schema({
    baker: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    ratings: [RatingSchema]

}, {timestamps: true});


module.exports = mongoose.model('Cake', CakeSchema);



