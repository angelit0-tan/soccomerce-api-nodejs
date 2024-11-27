const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
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
    }
});
  
module.exports = mongoose.model('Event', eventSchema);