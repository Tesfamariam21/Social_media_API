const jwt = require('jsonwebtoken');
require('dotenv').config;

const Secratekey = process.env.secrate_key;

const authenticated = async (req, res, next)=>{
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({error:"Token not Provided"});
    }

    jwt.verify(token, Secratekey, (err, user)=>{
        if(err){
            return res.status(403).json({error: "Token verification faild"});
        }
        req.user = user;
        next();
    });
}

module.exports = authenticated;