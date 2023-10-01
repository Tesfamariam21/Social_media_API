const mongoose = require('mongoose');

const RevokedTokenSchema = mongoose.Schema({
    token:{
        type: String,
        unique: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
        expires: '30d'
    }
});

const RevokedToken = mongoose.model('RevokedToken', RevokedTokenSchema);

module.exports = RevokedToken;