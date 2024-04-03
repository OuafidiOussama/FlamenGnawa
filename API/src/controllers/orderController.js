const Order = require("../models/OrderModel");
const CartItem = require("../models/CartModel");
const ErrorHandler = require("../utils/errorHandler");
const mongoose = require("mongoose");

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find()
      .populate("user", "first_name last_name")
      .sort({ dateOrdered: -1 });
    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    next(error);
  }
};

exports.getOrderById = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    if (!mongoose.isValidObjectId(orderId)) {
      return next(new ErrorHandler("OrderId Is not Valid", 403));
    }
    const order = await Order.findById(orderId)
      .populate("user", "first_name last_name")
      .populate({
        path: "cart",
        populate: {
          path: "product",
          populate: "category",
        },
      });

    if (!order) {
      return next(new ErrorHandler("Order doesnt exist", 404));
    }
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    next(error);
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const {} = req.body
    const cartItemIds = Promise.all(
      req.body.cart.map(async (item) => {
        let cartItem = new CartItem({
          quantity: item.quantity,
          product: item.product,
        });
        cartItem = await cartItem.save();
        return cartItem._id;
      }),
    );
    const cartItemIdsResolved = await cartItemIds;

    const data = {
      cart: cartItemIdsResolved,
      shippingAddress: req.body.shippingAddress,
      city: req.body.city,
      zip: req.body.zip,
      country: req.body.country,
      phone: req.body.phone,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    };
    const order = await Order.create(data);
    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    if (!mongoose.isValidObjectId(orderId)) {
      return next(new ErrorHandler("OrderId Is not Valid", 403));
    }
    const currentOrder = await Order.findOne({ _id: orderId });
    if (!currentOrder) {
      return next(new ErrorHandler("order doesnt exist", 404));
    }
    const data = {
      status: req.body.status || currentOrder.status,
      deleveryDate: req.body.deleveryDate || currentOrder.deleveryDate,
    };
    const order = await Order.findByIdAndUpdate(orderId, data, { new: true });
    if (!order) {
      return next(new ErrorHandler("order doesnt exist", 404));
    }
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    if (!mongoose.isValidObjectId(orderId)) {
      return next(new ErrorHandler("OrderId Is not Valid", 403));
    }
    const order = await Order.findByIdAndDelete(orderId);
    if (!order) {
      return next(new ErrorHandler("order doesnt exist", 404));
    }
    res.status(200).json({
      success: true,
      message: "Order Deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
};
