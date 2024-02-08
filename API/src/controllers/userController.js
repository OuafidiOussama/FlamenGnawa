const User = require('../models/UserModel')
const ErrorHandler = require('../utils/errorHandler')

exports.register = async(req, res, next)=>{
    const {email} = req.body
    const userExists = await User.findOne({email})

    if(userExists){
        next (new ErrorHandler('Email Already Registered', 400)) 
    }
    const data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        profile_picture: req.body.profile_picture,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        role: req.body.role
    }
    try {
        const user = await User.create(data)
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        next(error)
    }
}

