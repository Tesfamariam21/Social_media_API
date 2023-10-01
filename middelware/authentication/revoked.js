const RevokedToken = require('../models/revokedToken');

const Revoked = async (req, res, next)=>{
    try{
        const token = req.headers.autorization;
        const isRevoked = await RevokedToken.findone({token});
        if (isRevoked){
            return res.status(404).json({message: "Token revoked"});
        }
        next();
    }catch(error){
        return res.status(501).json({error: "Server error"});
    }
}

module.exports = Revoked;

