const User = require('../models/user');

const DeleteProfile = async (req,res)=>{
    try{
        const profile = await User.findByIdAndDelete({_id:req.params.User_id});
        if(!profile){
            return res.status(404).json({error: "User not found"});
        }
        res.json({message: "Deleted Successfully"});
    }catch(error){
        return res.status(501).json({error: "Server error"});
    }
}

module.exports = DeleteProfile;