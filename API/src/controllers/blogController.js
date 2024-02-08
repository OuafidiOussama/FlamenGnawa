const Blog = require('../models/BlogModel')
const ErrorHandler = require('../utils/errorHandler')

exports.getAllPosts = async (req, res, next) =>{
    try{
        const posts = await Blog.find()
        res.status(200).json({
            success: true,
            posts
        })
    } catch(error) {
        next(error)
    }
}

exports.getPostById = async(req, res, next)=>{
    try {
        const postId = req.params.id
        const post = await Blog.findOne({_id: postId})

        if(!post){
            return next(new ErrorHandler('Post doesnt exist', 404))
        }
        res.status(200).json({
            success: true,
            post
        })
    } catch (error) {
        next(error)
    }
}

exports.createPost = async (req, res, next) =>{
    try {
        const data ={
            title: req.body.title,
            postPicture: req.body.postPicture,
            content: req.body.content,
            creator: req.user._id
        };
        const post = await Blog.create(data);
        res.status(201).json({
            success: true,
            post
        })
    } catch (error) {
        next(error)
    }
}

exports.updatePost = async (req, res, next)=>{
    try {
        const postId = req.params.id
        const currentPost = await Blog.findOne({_id:postId})
        const data = {
            title: req.body.title || currentPost.title,
            postPicture: req.body.postPicture || currentPost.postPicture,
            content: req.body.content || currentPost.content,
        }
        const updatedPost = await Blog.findOneAndUpdate(
            {_id: postId},
            data,
            {new: true}
        )
        res.status(200).json({
            success: true,
            updatedPost,
          });
    } catch (error) {
        next(error)
    }
}

exports.deletePost = async (req, res, next)=>{
    try {
        const postId = req.params.id

        const post = await Blog.findOneAndDelete({_id: postId})
        if(!post){
            return next(new ErrorHandler('post doesnt exist', 404))
        }
        res.status(200).json({
            success: true,
            message: 'post deleted successfully !'
        })
    } catch (error) {
        next(error)
    }
}
