const express = require('express');
const GetUserProfile = require('../middelware/userprofile/getProfile');
const authenticated = require('../middelware/authentication/authenticated');
const UpdateProfile = require('../middelware/userprofile/updateProfile');
const DeleteProfile = require('../middelware/userprofile/deleteProfile');
const GettingAllPost = require('../middelware/posts/getAllPost');
const GettingPostById = require('../middelware/posts/getPostById');
const CreateNewPost = require('../middelware/posts/createPost');
const UpdatePost = require('../middelware/posts/updatePost');
const DeletePost = require('../middelware/posts/deletePost');
const LikeAPost = require('../middelware/interactions/like');
const UnlikeAPost = require('../middelware/interactions/unlike');
const SahreAPost = require('../middelware/interactions/share');
const RetriveComments = require('../middelware/comments/gettingComments');
const CreateAComment = require('../middelware/comments/createComment');
const UpdateComment = require('../middelware/comments/updateComment');
const DeleteComment = require('../middelware/comments/deleteComment');
const RetriveConversation = require('../middelware/message/conversation');
const DeleteMessage = require('../middelware/message/deleteMessage');
const UpdateMessage = require('../middelware/message/updateMessage');
const SendAMessage = require('../middelware/message/sendMessage');


const router = express.Router();

//userprofile routes
router.route('/profile').get(authenticated,GetUserProfile);
router.route('/:user_id').update(authenticated, UpdateProfile)
.delete(authenticated,DeleteProfile);


//post routes
router.route('/posts').get(authenticated, GettingAllPost)
.post(authenticated, CreateNewPost);
router.route('/:post_id').get(authenticated, GettingPostById)
.update(authenticated, UpdatePost).delete(authenticated, DeletePost);

//interactions routes
router.route('/posts/:post_id/like').post(authenticated, LikeAPost)
.delete(authenticated, UnlikeAPost);
router.route('/posts/:post_id/share').post(authenticated, SahreAPost);

//comment routes 
router.route('/posts/:post_id/comments').get(authenticated, RetriveComments);
router.route('/posts/:post_id/comments/comments_id')
.post(authenticated, CreateAComment)
.update(authenticated, UpdateComment).delete(authenticated, DeleteComment);

//message routes
router.route('/messages/conversations').get(authenticated, RetriveConversation)
.post(authenticated, SendAMessage);
router.route('/messages/conversations/:message_id')
.delete(authenticated, DeleteMessage).update(authenticated, UpdateMessage);

module.exports = router;