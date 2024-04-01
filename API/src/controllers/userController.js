const User = require("../models/UserModel");
const Member = require("../models/MembersModel");
const ErrorHandler = require("../utils/errorHandler");

exports.register = async (req, res, next) => {
  const { email } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    next(new ErrorHandler("Email Already Registered", 400));
  }
  const data = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    profil_picture: req.body.profil_picture,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    role: req.body.role,
  };
  try {
    let user;
    user = await User.create(data);
    if (data.role === "member") {
      const memberData = {
        user: user._id,
        quote: req.body.quote,
        instrument: req.body.instrument,
      };
      await Member.create(memberData);
    }
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return next(new ErrorHandler("Please Provide Your Email Address", 403));
    }
    if (!password) {
      throw new ErrorHandler("Please Provide A Password", 403);
    }
    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorHandler("Invalid Email Or Password", 400));
    }
    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return next(new ErrorHandler("Invalid Email Or Password", 400));
    }

    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

const sendToken = async (user, statusCode, res) => {
  const token = await user.signJwtToken();
  res.status(statusCode).json({
    success: true,
    user: user,
    jwtToken: token,
  });
};
