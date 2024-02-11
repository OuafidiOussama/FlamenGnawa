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


exports.createCategory = async (req, res, next) =>{
    try {
        const data ={
            name: req.body.name,
            description: req.body.description,
            categoryPicture: req.body.categoryPicture,
        };
        const category = await Category.create(data);
        res.status(201).json({
            success: true,
            category
        })
    } catch (error) {
        next(error)
    }
}


exports.updateCategory = async (req, res, next)=>{
    try {
        const categoryId = req.params.id
        const currentCategory= await Category.findOne({_id:categoryId})
        if(!currentCategory){
            return next(new ErrorHandler('category doesnt exist', 404))
        }
        const data = {
            name: req.body.name || currentCategory.name,
            description: req.body.description || currentCategory.description,
            categoryPicture: req.body.categoryPicture || currentCategory.categoryPicture,
        }
        const updatedCategory = await Category.findOneAndUpdate(
            {_id: categoryId},
            data,
            {new: true}
        )
        res.status(200).json({
            success: true,
            updatedCategory,
          });
    } catch (error) {
        next(error)
    }
}

exports.deleteCategory = async (req, res, next)=>{
    try {
        const categoryId = req.params.id

        const category = await Category.findOneAndDelete({_id: categoryId})
        if(!category){
            return next(new ErrorHandler('category doesnt exist', 404))
        }
        res.status(200).json({
            success: true,
            message: 'catgeory deleted successfully !'
        })
    } catch (error) {
        next(error)
    }
}