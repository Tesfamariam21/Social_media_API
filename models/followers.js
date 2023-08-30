const mongoose = require('mongoose');

const FollowerSchema = mongoose.Schema({

});

const Followers = mongoose.model('Followers', FollowerSchema);

module.exports = Followers;
