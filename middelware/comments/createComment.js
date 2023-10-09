const Post = require('../../models/post');
const Comment = require('../../models/comment');
 
const CreateAComment = async (req, res)=>{
    try{
        const content = req.body;
        const user_id = req.user.user_id;
        const post_id = req.params.post_id;
        const newComment = Comment({
            post: post_id,
            user: user_id,
            content: content
        });
        newComment.save();
        
        const posts = await Post.findOne({_id: post_id});
        posts.interactions.comments +=1;
        await posts.save();

        res.status(200).json(newComment);
    }catch(error){
        return res.status(500).json({error: "Server error"});
    }
}

module.exports = CreateAComment;
