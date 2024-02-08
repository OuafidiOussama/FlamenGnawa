const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: [true, 'Please Provide Your Post Title'],
    },
    postPicture: {
        type: String,
        trim: true,
    },
    creator:{
        type: ObjectId,
        ref: 'users'
    },
    content:{
        type: String,
        trim: true,
        required: [true, 'Please Provide The Post Content']
    },
    likes:[
        {
            type: ObjectId, 
            ref: "users"
        }
    ],
    comments:[
        {
            text: String,
            created: { type: Date, default: Date.now },
            postedBy: {
                type: ObjectId,
                ref: "users",
            },
        }
    ]
    
}, {timestamps: true})




module.exports = mongoose.model("blogs", blogSchema)