const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    post: {
        type: mongoose.Schema.ObjectId,
        ref: 'Post'
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    comment:{
        type: String,
        required: true
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
});

const Comment = mongoose.Schema('Comment', CommentSchema);

module.exports = Comment;
