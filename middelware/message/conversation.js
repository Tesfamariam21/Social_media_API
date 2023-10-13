const Message = require('../../models/message');
const User = require('../../models/user');

const RetriveConversation = async (req, res)=>{
    try{
        const {pageNo, limit} = req.query;
        const skipped = ((parseInt(pageNo) || 1) -1) * parseInt(limit);
        const user_id = req.user._id;
        const reciver = await User.findOne({username: req.query.username});
        const conversation = await Message.find(
            {user: user_id, reciver: reciver._id}
        ).sort({timestamp: 1}).skip(skipped).limit(limit);

        res.status(201).json(conversation);
    }catch(error){
        return res.status(501).json({error: "Server error"});
    }
}

module.exports = RetriveConversation;