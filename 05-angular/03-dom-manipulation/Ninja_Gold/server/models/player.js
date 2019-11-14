const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlayerSchema = new Schema({
    gold: {
        type: Number,
        default: 0,
    },
    log: {
        type: String,
        default: ""
    },
    uniqueId: {
      type: Number,
    },
    }, {timestamps: true});

    module.exports = mongoose.model('Player', PlayerSchema);
