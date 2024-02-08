const Blog = require('../models/BlogModel')
const ErrorHandler = require('../utils/errorHandler')


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