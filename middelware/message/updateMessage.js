const  Message = require('../../models/message');

const  UpdateMessage = async (req, res)=>{
    try{
        const reciver_id = await User.findOne({username: req.query.username});
        if(!reciver_id){
            return res.statu(404).json({error: "Reciver is not found"});
        }
        const message = await Message.findOne(
            {user: req.user._id, reciver: reciver_id._id, _id:req.params.message_id}
        );
        if(message){
            if(message.message_type === 'text'){
                const updated = await Message.findByIdAndUpdate(
                    {user: req.user._id, 
                         reciver: reciver_id._id,
                         _id:req.params.message_id
                    },
                    req.body
                );
                return res.json(updated);
            }else{
                return res.status(400).json({error: "Media can not be edited"});
            }
        }else{
            return res.status(400).json({error: "Message not found"});
        }
    }catch(error){
        return res.status(501).json({error: "Server error"});
    }
}

module.exports = UpdateMessage;