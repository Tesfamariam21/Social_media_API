const Message = require('../../models/message');
const User = require('../../models/user');
const multer = require('multer');
const upload = multer({dest: '../../uploads'});

const SendAMessage = async (req, res) =>{
    try{
       
        const user_id = req.user._id;
        const reciver_id = await User.findOne({username: req.query.username});
        if(!reciver_id){
            return res.statu(404).json({error: "Reciver is not found"});
        }
       
        upload.single('file')(req,res,(err)={
            if(err){
                return res.satus(400).json({error: err.message});
            }
        });
        const {message_text} = req.body;
        const mediapath = req.file.path;
        
        let message_type;
        if(message_text){
            message_type = "text"
        }else if (mediapath){
            message_type = "media"
        }else{
            return res.status(400).json({error: "Either text or media must be provided"});
        }

        const newMessage = new Message({
            sender: user_id,
            reciver: reciver_id._id,
            message_type,
            message_text,
            mediapath,
        });
        
        await newMessage.save();

        res.json(newMessage);
        
    }catch(error){
        return res.status(501).json({error: "Server error"});
    }
}


module.exports = SendAMessage;