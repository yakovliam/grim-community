const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        min: 5
    },
    username: {
        type: String,
        required: true,
        max: 255,
        min: 5
    },
    password: {
        type: String,
        required: true,
        max: 2048,
        min: 8
    },
    date: {
        type: Date,
        default: Date.now(),
        required: false
    },
});

module.exports = mongoose.model('User', schema);