const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    sender:{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    reciver:{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    timestamp:{
        type: Date,
        default: Date.now
    },
    massage_type:{
        type: String
    },
    message_text:{
        type: String
    },
    mediaPath:{
        type: String
    } 
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;