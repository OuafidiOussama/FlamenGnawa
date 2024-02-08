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