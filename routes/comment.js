const express = require('express');
const { body } = require('express-validator');

const commentController = require('../controllers/comment');
const isAuth = require('../middleware/is-auth');

const router = express.Router();
const commentValidation = [body('content').trim().isLength({ min: 1 })];

//get all comments
router.get('/comments', isAuth, commentController.getComments);

//get single comment
router.get('/comment/:commentId', isAuth, commentController.getComment);

//create comment
router.post('/comment', isAuth, commentValidation, commentController.createComment);

//edit comment
router.put('/comment/:commentId', isAuth, commentValidation, commentController.updateComment);

//delete comment
router.delete('/comment/:commentId', isAuth, commentController.deleteComment);

module.exports = router;
