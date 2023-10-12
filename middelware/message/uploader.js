const fileUploader = (req, res, uploader)=>{
    uploader(req, res, function(err){
        if(err){
            return res.status(500).json({error: "File upload failed"});
        }

        const filepath = req.file.path;
        
        return filepath;
    });
}

module.exports = fileUploader;