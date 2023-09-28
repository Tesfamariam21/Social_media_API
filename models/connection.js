const mongoose = require('mongoose');

const ConnectionSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    connectedUser:{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    connection_type:{
        type: String,
        enum: ['friend', 'follower', 'following']
    }
});

const Connection = mongoose.model('Connection', ConnectionSchema);

module.exports = Connection;