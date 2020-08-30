const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    owner: { // the owner (id of the owner) of the room
        type: String,
        required: true,
    },
    name: { // then name of the room
        type: String,
        required: true,
        max: 255,
        min: 3
    },
    date: { // date created
        type: Date,
        default: Date.now(),
        required: false
    },
});

module.exports = mongoose.model('Room', schema);