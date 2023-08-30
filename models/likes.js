const mongoose = require('mongoose');

const LikeSchema = mongoose.Schema({

});

const Likes = mongoose.model('Likes', LikeSchema);

module.exports = Likes;
