const Member = require("../models/MembersModel");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const ErrorHandler = require("../utils/errorHandler");

exports.getAllMembers = async (req, res, next) => {
  try {
    const members = await Member.find().populate("user");
    res.status(200).json({
      success: true,
      members,
    });
  } catch (error) {
    next(error);
  }
};

exports.getMemberById = async (req, res, next) => {
  try {
    const memberId = req.params.id;
    const member = await Member.findOne({ _id: memberId }).populate("user");

    if (!member) {
      return next(new ErrorHandler("Member doesnt exist", 404));
    }
    res.status(200).json({
      success: true,
      member,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateMember = async (req, res, next) => {
  try {
    const memberId = req.params.id;
    const currentMember = await Member.findOne({ _id: memberId });
    if (!currentMember) {
      return next(new ErrorHandler("member doesnt exist", 404));
    }
    const userId = currentMember.user;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return next(new ErrorHandler("user not found", 404));
    }
    const userData = {
      first_name: req.body.firstName || user.first_name,
      last_name: req.body.lastName || user.last_name,
      profil_picture: req.body.profil_picture || user.profil_picture,
      phone: req.body.phone || user.phone,
    };
    await User.findOneAndUpdate({ _id: userId }, userData, { new: true });
    const memberData = {
      quote: req.body.quote || currentMember.quote,
      instrument: req.body.instrument || currentMember.instrument,
    };
    const updatedMember = await Member.findOneAndUpdate(
      { _id: memberId },
      memberData,
      { new: true },
    ).populate("user");
    res.status(200).json({
      success: true,
      updatedMember,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteMember = async (req, res, next) => {
  try {
    const memberId = req.params.id;

    const member = await Member.findOneAndDelete({ _id: memberId });
    if (!member) {
      return next(new ErrorHandler("member doesnt exist", 404));
    }
    res.status(200).json({
      success: true,
      message: "member deleted successfully !",
    });
  } catch (error) {
    next(error);
  }
};
