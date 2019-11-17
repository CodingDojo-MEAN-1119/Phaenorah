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

module.exports = mongoose.model('Rating', RatingSchema);
