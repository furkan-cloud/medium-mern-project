const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult, check } = require("express-validator");
const asyncErrorWrapper = require("express-async-handler");
const { sendJwtToClient } = require("../helpers/auth/jwtTokenHelpers");
const CustomError = require("../helpers/error/CustomError");
const comparePassword = require("../helpers/auth/comparePassword");

const register = asyncErrorWrapper(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  //TODO1 : Input validate  (express-validator )

  //TODO2: Check already registered
  const checkUser = await User.findOne({ email }); // select("-password");
  if (checkUser) {
    // return res.status(400).json({
    //   success: false,
    //   msg: "User already exists",
    // });
    return next(new CustomError("User already exists", 400));
  }
  //TODO3: Crpyt password 1 method   or pre hooks UserScheme  2 method
  //   const salt = await bcrypt.genSalt(10);
  //   const hashPass = await bcrypt.hash(password, salt);
  //   const newUser = new User({
  //     lastName,
  //     firstName,
  //     email,
  //     password: hashPass,
  //   });

  //   //TODO4: Save the User
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  //   await newUser.save();
  //TODO5: Authentication (jwt)
  //   const payload = {
  //     firstName: newUser.firstName,
  //     email: newUser.email,
  //     id: newUser._id,
  //   };
  //   const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
  //     expiresIn: 3600,
  //   });
  sendJwtToClient(newUser, res);
  //   const token = await newUser.generateJwtFromUser();
  //   //TODO Check token and sendTokenToClient helpers
  //   if (!token) {
  //     return res
  //       .status(400)
  //       .json({ errors: [{ message: "Couldnt sign the token" }] });
  //   }
  //   //TODO Add CustomError
  //   //TODO Add jwt token add User.methods and Jwt Token Helpers
  //   //TODO Pass hash add User pre hooks
  //   res.status(200).json({
  //     success: true,
  //     user: newUser,
  //     token,
  //   });
});

const login = asyncErrorWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  //TODO1 : Input validate  (express-validator )

  //TODO2: Check already registered
  const user = await User.findOne({ email }).select("+password"); // select("-password");
  if (!user) {
    return next(new CustomError("User does not  exists", 400));
  }
  if (!comparePassword(password, user.password)) {
    return next(new CustomError("Please check  your credentials!", 400));
  }
  sendJwtToClient(user, res);
});

const logout = asyncErrorWrapper(async (req, res, next) => {
  const { NODE_ENV } = process.env;

  //TODO:1 Cookie Clear and Client LocalStorage Clear

  return res
    .status(200)
    .cookie({
      httpOnly: true,
      expires: new Date(Date.now()),
      secure: NODE_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      message: "Logout Successfull",
    });
});
const currentUser = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findById(req.user.id).populate('following').populate({
    path: "readingList", // populate blogs
    populate: {
      path: "author" // in blogs, populate comments
    }
  }).populate({
    path: "posts", // populate blogs
    populate: {
      path: "author" // in blogs, populate comments
    }
  }).select("-password");
  if (!user) {
    return next(new CustomError("User does not exist", 400));
  }
  // res.json(user);

  return res.status(200).json({
    success: true,
    user: user,
  });
});

module.exports = {
  register,
  login,
  logout,
  currentUser,
};
