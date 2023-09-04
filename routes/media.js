const express = require('express');

const router = express.Router();

//retrive homepage
router.get('/home',async (req, res)=>{

});

//creating a post
router.post('/post', async (req, res)=>{

});

//retrive posts
router.get('/posts', async (req, res)=>{

});

//editing post
router.put('/post/:post_id', async (req, res)=>{

});

//delete post

router.delete('/post/:post_id', async (req, res)=>{

});


//putting a comment for a post
router.post('/comment', async (req, res)=>{

});

//retrive a given comments 
router.get('/comments', async (req, res)=>{

});

//edit comment
router.put('/comment/:com_id', async (req, res)=>{

});

//delete post

router.delete('/comment/:com_id', async (req, res)=>{

});

//follow a user
router.post('/follow', async (req, res)=>{

});

//retrive followers 
router.get('/followers', async (req, res)=>{

});

//remove followers and unfollow user
router.delete('/', async (req, res)=>{

});


module.exports = router;