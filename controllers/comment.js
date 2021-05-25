const { validationResult } = require('express-validator');

const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');

exports.getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find();
        if (comments.length < 1) {
            console.log(comments);
            const error = new Error('Could not find comments.');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({ message: 'Comments fetched.', comments: comments })
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getComment = async (req, res, next) => {
    const commentId = req.params.commentId;
    try {
        const comment = await Comment.findById(commentId);
        if (!comment) {
            const error = new Error('Could not find comment.');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({ message: 'Comment fetched.', comment: comment });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.createComment = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }
    const content = req.body.content;
    const postId = req.body.postId;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            const error = new Error('Could not find post.');
            error.statusCode = 404;
            throw error;
        }
        const comment = new Comment({
            content: content,
            creator: req.userId,
            post: postId
        });
        const savedComment = await comment.save();
        const user = await User.findById(req.userId);
        user.comments.push(comment);
        const savedUser = await user.save();
        post.comments.push(comment);
        const savedPost = await post.save();
        res.status(201).json({
            message: 'Comment created successfully!',
            comment: comment,
            post: { id: savedPost._id, title: savedPost.title },
            creator: { id: savedUser._id, name: savedUser.name }
        });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.updateComment = async (req, res, next) => {
    const errors = validationResult(req);
    const commentId = req.params.commentId;
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }
    const content = req.body.content;
    try {
        const comment = await Comment.findById(commentId);
        if (!comment) {
            const error = new Error('Could not find comment.');
            error.statusCode = 404;
            throw error;
        }
        if (comment.creator.toString() !== req.userId) {
            const error = new Error('Not authorized!');
            error.statusCode = 403;
            throw error;
        }
        comment.content = content;
        const savedComment = await comment.save();
        res.status(201).json({ message: 'Comment updated.', comment: savedComment });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
exports.deleteComment = async (req, res, next) => {
    const creator = req.userId;
    const commentId = req.params.commentId;
    try {
        const comment = await Comment.findById(commentId);
        if (!comment) {
            const error = new Error('Could not find comment.');
            error.statusCode = 404;
            throw error;
        }
        if (comment.creator.toString() !== req.userId) {
            const error = new Error('Not authorized!');
            error.statusCode = 403;
            throw error;
        }
        const user = await User.findById(creator);
        user.comments.pull(commentId);
        const savedUser = await user.save();

        const post = await Post.findById(comment.post);
        post.comments.pull(commentId);
        const savedPost = await post.save();

        res.status(200).json({ message: 'Comment deleted.' })
        const deletedComment = await comment.delete();
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};