const ErrorHandler = require('../utils/errorHandler')
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')

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
    console.log(req.user);
    if(req.user.role === 'super' || req.user.role === 'member'){
        next()
    }else{
        return next(new ErrorHandler('Access denied', 401))
    }
}