const Post = require('../models/post');

const GettingPostById = async (req,res)=>{
    try{
        const posts = await Post.findOne({user: req.user._id, _id:req.parmas.post_id});
        if(!posts){
            return res.status(404).json({error: "Post not found"});
        }
        res.json(posts);
    }catch(error){
        return res.status(501).json({error: "Server error"});
    }
}

module.exports = GettingPostById;