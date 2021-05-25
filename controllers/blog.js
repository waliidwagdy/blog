const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');



exports.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        if (posts.length < 1) {
            const error = new Error('Could not find posts.');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({ message: 'Posts fetched.', posts: posts });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

};

exports.getPost = async (req, res, next) => {
    const postId = req.params.postId;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            const error = new Error('Could not find post.');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({ message: 'Post fetched.', post: post });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    };
};

exports.createPost = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }
    if (!req.file) {
        const error = new Error('No image provided.');
        error.statusCode = 422;
        throw error;
    }
    const title = req.body.title;
    const content = req.body.content;
    const imageUrl = req.file.path;
    const post = new Post({
        title: title,
        content: content,
        imageUrl: imageUrl,
        creator: req.userId
    });
    try {
        const savedPost = await post.save();
        const user = await User.findById(req.userId);
        user.posts.push(savedPost);
        const savedUser = await user.save();
        res.status(201).json({
            message: 'Post created successfully!',
            post: savedPost,
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

exports.updatePost = async (req, res, next) => {
    const errors = validationResult(req);
    const postId = req.params.postId;
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }
    try {
        const post = await Post.findById(postId);
        if (!post) {
            const error = new Error('Could not find post.');
            error.statusCode = 404;
            throw error;
        }
        if (post.creator.toString() !== req.userId) {
            const error = new Error('Not authorized!');
            error.statusCode = 403;
            throw error;
        }
        const title = req.body.title;
        const content = req.body.content;
        let imageUrl = req.body.image;
        if (!imageUrl) {
            const error = new Error('No file picked.');
            error.statusCode = 422;
            throw error;
        }
        if (req.file) {
            imageUrl = req.file.path;
        }
        post.title = title;
        post.imageUrl = imageUrl;
        post.content = content;
        const savedPost = await post.save();
        res.status(200).json({ message: 'Post updated.', post: savedPost })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.deletePost = async (req, res, next) => {
    const postId = req.params.postId;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            const error = new Error('Could not find post.');
            error.statusCode = 404;
            throw error;
        }
        if (post.creator.toString() !== req.userId) {
            const error = new Error('Not authorized!');
            error.statusCode = 403;
            throw error;
        }
        clearImage(post.imageUrl);
        const user = await User.findById(req.userId);
        const userCommentsIds = post.comments.map(el => {
            return el.toString();
        });
        user.comments = user.comments.filter(item => {
            return !userCommentsIds.includes(item);
        });
        user.posts.pull(postId);
        const savedUser = await user.save();
        const deletedPostComments = await Comment.deleteMany({ post: postId });
        const deletedPost = await post.delete();
        res.status(200).json({ message: 'Post deleted.' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};


const clearImage = filePath => {
    filePath = path.join(__dirname, '..', filePath);
    fs.unlink(filePath, err => console.log(err));
};