const Post = require('../../models/post');

const DeletePost = async (req, res)=>{
    try{
        const posts = await Post.findByIdAndDelete(
            {user: req.user.user_id, _id:req.params.post_id}
        );
        if(!posts){
            return res.status(404).json({error: "Post not found"});
        }
        res.json({message: "Successfully Deleted!"})
    }catch(error){
        return res.status(501).json({error: "Server error"});
    }
}

module.exports = DeletePost;