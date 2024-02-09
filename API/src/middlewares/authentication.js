const ErrorHandler = require('../utils/errorHandler')
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
const Blog = require('../models/BlogModel')

exports.authenticate = async (req, res, next)=>{
    const authHeaders = req.headers['authorization']
    if(!authHeaders){
        return next(new ErrorHandler('You Must Log In', 401))
    }
    try{
        const token = authHeaders.split(' ')[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = await User.findById(decoded.id)
        next()
    }catch(err){
        next(new ErrorHandler('Token Has Been Changed', 401))
    }
}

exports.isAllowedToCreateArticles = async (req, res, next) =>{
    if(req.user.role === 'super' || req.user.role === 'member'){
        next()
    }else{
        return next(new ErrorHandler('Access denied', 401))
    }
}

exports.isPublisher = async (req, res, next) =>{
    const userId = req.user._id.toString()
    const postId= req.params.id
    const commentId = req.body._id
    const post = await Blog.findOne({_id: postId})
    
    if(!post){
        return next(new ErrorHandler('No post Found', 404))
    }
    const comment = post.comments.find(comment => comment._id.toString() === commentId);

    if(!comment) {
        return next(new ErrorHandler('Comment not found for this post', 404));
    }
    const publisherId = comment.postedBy.toString()

    if(userId !== publisherId){
        return next(new ErrorHandler('You cant Delete this comment'))
    }
    next()
}