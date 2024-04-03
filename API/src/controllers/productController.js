const Product = require("../models/ProductModel");
const Category = require("../models/CategoryModel");
const ErrorHandler = require("../utils/errorHandler");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find().populate("category");
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findOne({ _id: productId }).populate(
      "category",
    );

    if (!product) {
      return next(new ErrorHandler("Product doesnt exist", 404));
    }
    
    const categoryId = product.category._id;
    const relatedProducts = await Product.find({
      category: categoryId,
      _id: { $ne: productId },
    }).populate('category');
    res.status(200).json({
      success: true,
      product,
      relatedProducts,
    });
  } catch (error) {
    next(error);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const categoryId = req.body.category;
    const category = await Category.findOne({ _id: categoryId });
    if (!category) {
      return next(new ErrorHandler("Category not found", 404));
    }
    const data = {
      label: req.body.label,
      description: req.body.description,
      brand: req.body.brand,
      quantity: req.body.quantity,
      unitPrice: req.body.unitPrice,
      productPicture: req.body.productPicture,
      category: req.body.category,
    };
    const product = await Product.create(data);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const currentProduct = await Product.findOne({ _id: productId });
    if (!currentProduct) {
      return next(new ErrorHandler("product doesnt exist", 404));
    }
    const categoryId = req.body.category || currentProduct.category;
    const category = await Category.findOne({ _id: categoryId });
    if (!category) {
      return next(new ErrorHandler("Category not found", 404));
    }
    const data = {
      label: req.body.label || currentProduct.label,
      description: req.body.description || currentProduct.description,
      brand: req.body.brand || currentProduct.brand,
      quantity: req.body.quantity || currentProduct.quantity,
      unitPrice: req.body.unitPrice || currentProduct.unitPrice,
      productPicture: req.body.productPicture || currentProduct.productPicture,
      category: req.body.category || currentProduct.category,
    };
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      data,
      { new: true },
    ).populate("category");
    res.status(200).json({
      success: true,
      updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;

    const product = await Product.findOneAndDelete({ _id: productId });
    if (!product) {
      return next(new ErrorHandler("product doesnt exist", 404));
    }
    res.status(200).json({
      success: true,
      message: "product deleted successfully !",
    });
  } catch (error) {
    next(error);
  }
};
