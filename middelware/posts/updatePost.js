const Post = require("../../models/post");

const UpdatePost = async (req,res)=>{
    try{
        const posts = await Post.find({_id: req.params.post_id, user: req.user.user_id});
        if(posts){
            if(posts.post_type==="text"){
                const updatedPost = await Post.findByIdAndUpdate(
                    {_id:req.params.post_id}, req.body
                );
                return res.json(updatedPost);
            }else{
                return res.status(400).json({message: "Can not update media"});
            }
        }else{
            return res.status(404).json({message: "Post not found"});
        }
    }catch(error){
        return res.status(501).json({error: "Server error"});
    }
}

module.exports = UpdatePost;