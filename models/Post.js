const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 50,
    },
    type: {
      type: String, // Indicates whether it's an 'event' or 'group'
      enum: ['event', 'group'],
      required: true,
    },
    ref: { // Subdocument reference
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: 'type', // Reference path indicates 'event' or 'group'
    },
});

module.exports = mongoose.model('Post', postSchema);