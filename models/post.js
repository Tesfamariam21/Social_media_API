const mongoose = require('mongoose');
const Comment = require('../models/comment');


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
    },
    interactions:{
        likes:{
            type: Number,
            default: 0
        },
        comments:{
            type: Number,
            default:0
        },
        share:{
            type: Number,
            default: 0
        }
        

    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;