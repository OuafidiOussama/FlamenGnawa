const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    label:{
        type: String,
        trim: true,
        required: [true, 'Please Provide Your Product Label'],
    },
    description:{
        type: String,
        trim: true,
        required: [true, 'Please Provide Your Product Description'],
    },
    brand:{
        type: String,
        trim: true,
        required: [true, 'Please Provide Your Product Brand'],
    },
    quantity:{
        type: Number,
        trim: true,
        required: [true, 'Please Provide Your Product Quantity'],
    },
    unitPrice:{
        type: Number,
        trim: true,
        required: [true, 'Please Provide Your Product Price'],
    },
    productPicture: {
        type: String,
        trim: true,
        required: [true, 'Please Provide Your Product Picture'],
    },
    category: {
        type: String,
        trim: true,
        required: [true, 'Please Provide Your Product Category'],
    }
}, {timestamps: true})




module.exports = mongoose.model("products", productSchema)