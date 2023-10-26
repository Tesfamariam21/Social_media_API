const Post = require('../../models/post');
const multer = require('multer');
const upload = multer({dest: '../../uploads'});

const CreateNewPost = (req,res)=>{
    try{
        const user_id= req.user.user_id;
        const {post_text} = req.body;
        upload.single('file')(req,res,(err)={
            if(err){
                return res.satus(400).json({error: err.message});
            }
        });

        const mediapath = req.file.path;
        
        let post_type;
        if(post_text){
            post_type = "text"
        }else if (mediapath){
            post_type = "media"
        }else{
            return res.status(400).json({error: "Either text or media must be provided"});
        }
        const newpost= new Post({
            user: user_id,
            post_type,
            post_text,
            mediapath
        });

        newpost.save()
        res.status(201).json(newpost);

    }catch(error){
        return res.status(501).json({error: "Server error"});
    }
}

module.exports = CreateNewPost;