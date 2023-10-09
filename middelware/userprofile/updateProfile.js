const User = require('../../models/user');

const UpdateProfile = async (req, res)=>{
    try{
        const profile = await User.findByIdAndUpdate({_id:req.params.user_id}, req.body);
        if(!profile){
            return res.status(404).json({error: "user not found"});
        }
        res.json(profile);
    }catch(error){
        return res.status(501).json({error: "Server error"});
    }
}

module.exports = UpdateProfile;