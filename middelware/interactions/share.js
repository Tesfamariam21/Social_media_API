const Post = require('../../models/post');

const SahreAPost = async (req, res)=>{
    try{
        const post = await Post.findOne({_id: req.params.post_id});
        if(!post){
            return res.status(404).json({error: "Post not found"});
        }
        post.interactions.share +=1;
        await post.save();
        res.status(200).json({message: "Post shared"});
    }catch(error){
        return res.status(500).json({error: "Server error"});
    }
}

module.exports = SahreAPost;