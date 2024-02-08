const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        trim: true,
        required: [true, 'Please Privide Your First Name'],
        maxlength: 32,
    },
    last_name:{
        type: String,
        trim: true,
        required: [true, 'Please Privide Your Last Name'],
        maxlength: 32,  
    },
    profil_picture:{
        type: String,
    },
    email:{ 
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Please Privide Your Email']
    },
    password:{
        type: String,
        trim: true,
        required: [true, 'Please Privide Your Password'],
        minlength: [6, 'Password must be at least 6 characters'],
    },
    phone:{
        type: Number,
        trim: true,
        required: [true, 'Please Provide Your phone number'],
    },
    role:{
        type: String,
        default: 'user'
    },
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})


module.exports = mongoose.model("users", userSchema)