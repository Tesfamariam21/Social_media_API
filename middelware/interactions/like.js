const Post =require('../../models/post');

const LikeAPost = async (req, res)=>{
    try{
        const posts = await Post.findOne({_id: req.params.post_id});
        if(!posts){
            return res.status(404).json({error: "Post not found"});
        }
        posts.interactions.likes +=1;
        await posts.save();
        res.status(200).json({message: "Post liked!"});
    }catch(error){
        return res.status(501).json({error: "Server error"});
    }
}

module.exports = LikeAPost;