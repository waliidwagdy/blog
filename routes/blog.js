const express = require('express');
const { body } = require('express-validator');

const blogController = require('../controllers/blog');
const isAuth = require('../middleware/is-auth');

const router = express.Router();
const postValidation = [body('title').trim().isLength({ min: 5 }), body('content').trim().isLength({ min: 5 })];


//get all posts
router.get('/posts', isAuth, blogController.getPosts);

//get sinle post
router.get('/post/:postId', isAuth, blogController.getPost);

//create post
router.post('/post', isAuth, postValidation, blogController.createPost);

//update post
router.put('/post/:postId', isAuth, postValidation, blogController.updatePost);

//delete post
router.delete('/post/:postId', isAuth, blogController.deletePost);

module.exports = router;