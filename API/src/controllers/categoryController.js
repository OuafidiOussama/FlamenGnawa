const Category = require('../models/CategoryModel')
const ErrorHandler = require('../utils/errorHandler')

exports.getAllCategories = async (req, res, next) =>{
    try{
        const categories = await Category.find()
        res.status(200).json({
            success: true,
            categories
        })
    } catch(error) {
        next(error)
    }
}

exports.getCategoryById = async(req, res, next)=>{
    try {
        const categoryId = req.params.id
        const category = await Category.findOne({_id: categoryId})

        if(!category){
            return next(new ErrorHandler('Category doesnt exist', 404))
        }
        res.status(200).json({
            success: true,
            category
        })
    } catch (error) {
        next(error)
    }
}
