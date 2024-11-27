const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 50,
    },
    description: {
        type: String,
        required: [true, 'Please provide description'],
        minlength: 3,
        maxlength: 200,
    },
});

module.exports = mongoose.model('Group', groupSchema);