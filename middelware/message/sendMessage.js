const Message = require('../../models/message');
const User = require('../../models/user');
const multer = require('multer');
const fileUploader =require('./uploader').default;
const upload = multer({dest: '../../uploads'});

const SendAMessage = async (req, res) =>{
    try{
       
        const user_id = req.user._id;
        const reciver_id = await User.findOne({username: req.query.username});
        if(!reciver_id){
            return res.statu(404).json({error: "Reciver is not found"});
        }
        const mediapath = fileUploader(req,res, upload.single('file'));
        const {message_text} = req.body;
        
        let message_type;
        if(message_text){
            message_type = "media"
        }else if (mediapath){
            message_type = "text"
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