const User = require('../../models/user');

const GetUserProfile = async (req,res)=>{
    try{
        const profile = await User.findone({_id:req.user.user_id}); 
        if(!profile){
            return res.status(401).json({error: "User not found"});
        }
        res.json(profile);
    }catch(error){
        return res.status(501).json({error:"Server Error"});
    }
}
module.exports = GetUserProfile;