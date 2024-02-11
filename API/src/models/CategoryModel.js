const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'Please Provide Your Category Name'],
    },
    description:{
        type: String,
        trim: true,
        required: [true, 'Please Provide Your Category Description'],
    },
    categoryPicture: {
        type: String,
        trim: true,
    },
}, {timestamps: true})




module.exports = mongoose.model("categories", categorySchema)