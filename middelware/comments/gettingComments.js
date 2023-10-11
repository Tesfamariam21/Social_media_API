const Comment = require('../../models/comment');


const RetriveComments = async (req, res)=>{
    try{
        const {pageNo, limit} = req.query;
        const skipped = ((pageNo || 1) - 1) * parseInt(limit);
        const comments = await Comment.find(
            {post: req.parmas.post_id, _id: req.parmas.comment_id}
        ).skip(skipped).limit(limit);
        if(!comments){
            return res.status(404).json({error: "Comment not found"});
        }
        res.json(comments);
    }catch(error){
        return res.status(500).json({error: "Server error"});
    }
}

module.exports = RetriveComments;