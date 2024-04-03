const ErrorHandler = require("../utils/errorHandler");
const Cart = require("../models/CartModel");
const Product = require("../models/ProductModel");

exports.getAllItemsFromCart = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const cart = await Cart.findOne({ user: userId }).populate("items.product");
    if (!cart) {
      return res.status(200).json({
        success: true,
        items: [],
      });
    }
    res.status(200).json({
      success: true,
      items: cart.items,
    });
  } catch (error) {
    next(error);
  }
};

exports.addItemToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id;
    const product = await Product.findOne({ _id: productId });
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = await Cart.create({ user: userId, items: [] });
    }
    const itemIndex = cart.items.findIndex((item) => {
      return item.product && item.product.equals(productId);
    });
    if (itemIndex !== -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
    await cart.save();
    res.status(201).json({
      success: true,
      message: "Item added to cart successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteFromCart = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const productId = req.params.id;
    console.log(productId);

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return next(new ErrorHandler("Cart not found", 404));
    }

    const itemIndex = cart.items.findIndex((item) => {
        return item.product && item.product.equals(productId);
      });

    if (itemIndex === -1) {
      return next(new ErrorHandler("Item not found in the cart", 404));
    }

    cart.items.splice(itemIndex, 1);

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Item removed from cart successfully",
    });
  } catch (error) {
    next(error);
  }
};
