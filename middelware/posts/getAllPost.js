const Post = require('../../models/post');


const GettingAllPost = async (req,res)=>{
    try{
        const pageNo = parseInt(req.query.pageNo) || 1;
        const skippedoc = (pageNo-1) * (parseInt(req.query.limit) || 10);
        const posts = await Post.find({user:req.user.user_id})
        .skip(skippedoc).limit(req.query.limit);

        res.josn(posts);
    }catch(error){
        return res.status(501).json({error: "Server error"});
    }
}

module.exports = GettingAllPost;