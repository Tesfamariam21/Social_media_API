const Comment = require('../../models/comment');

const DeleteComment = async (req, res)=>{
    try{
        const comment = await Comment.findByIdAndDelete({_id: req.params.comment_id});
        if(!comment){
            return res.status(404).json({error: "Comment not found"});
        }
        res.josn({message: "Successfully Deleted"})
    }catch(error){
        return res.status(500).json({error: "Server error"});
    }
}

module.exports = DeleteComment;