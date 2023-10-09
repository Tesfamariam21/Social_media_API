const Comment = require('../../models/comment');

const UpdateComment = async (req,res)=>{
    try{
        const comment_id = req.params.comment_id;
        const newcomment = Comment.findByIdAndUpdate(
            {_id: comment_id}, req.body
        );
        if(!newcomment){
            return res.status(404).json({error: "comment not found"});
        }
        res.status(200).json({message: "Successfully Updated"});

    }catch(error){
        return res.status(500).json({error: "Server error"});
    }
}

module.exports = UpdateComment;