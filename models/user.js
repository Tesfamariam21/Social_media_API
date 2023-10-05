const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    profilePic:{
        type: String
    },
    bio:{
        type:String,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
