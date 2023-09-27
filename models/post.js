const mongoose = require('mongoose');
const User = require('./user');


const PostSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    post_type:{
        type: String,
    },
    post_text:{
        type: String
    },
    mediaPath:{
        type: String
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;