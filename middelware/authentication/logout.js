const RevokedToken = require('../../models/revokedToken');

const Logout = async (req,res)=>{
    try{
        const token =req.headers.authorization;
        const revokedToken = new RevokedToken({token});
        await revokedToken.save();
        return res.json({message: "Loged out"});
    }catch(error){
        return res.status(501).json({error: "Server error"});
    }
}

module.exports = Logout;