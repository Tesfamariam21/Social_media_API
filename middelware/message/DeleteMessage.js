const Message = require('../../models/message');

const DeleteMessage = async (req, res)=>{
    try{
        const reciver_id = await User.findOne({username: req.query.username});
        if(!reciver_id){
            return res.statu(404).json({error: "Reciver not found"});
        }
        const message = await Message.findByIdAndDelete(
            {user: req.user._id, reciver: reciver_id._id, _id:req.params.message_id}
        );
        if(!message){
            return res.statu(404).json({error: "Message not found"});
        }
        res.json({message: "Successfully Deleted!"});
    }catch(error){
        return res.status(501).json({error: "Server error"});
    }
}

module.exports = DeleteMessage;