const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");

const getSingleUser = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id).populate('posts');
  return res.json({
    success: true,
    data: user,
  });
});

const getAllUsers = asyncErrorWrapper(async (req, res, next) => {
  const users = await User.find();
  //TODO:1 Pagination and search query eklenecek
  return res.status(200).json(users);
});

const followUser = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  let user = await User.findById(id);
  let currentUser = await User.findById(req.user.id);

  //TODO followers da burada eklenecek birinin followingi birinin followerse olucak ✅

  if (user.following.includes(currentUser._id)) {
    return next(new CustomError("You already follow this user", 400));
  }
  user.following.push(currentUser._id);
  currentUser.followers.push(user._id);

  user.followingCount = user.following.length;
  currentUser.followersCount = currentUser.followers.length;
  await user.save({ new: true });
  await currentUser.save();

  res.status(200).json({
    success: true,
    message: "Followed operations successfull",
    data: user,
  });
});

//TODO Client tarafına gonderireken populate yapılıcak
const unfollowUser = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  let user = await User.findById(id);
  let currentUser = await User.findById(req.user.id);

  if (!user.following.includes(currentUser._id)) {
    return next(new CustomError("You can not  undo  this user", 400));
  }

  const userIndex = user.following.indexOf(currentUser._id);
  const currentUserIndex = currentUser.followers.indexOf(user._id);
  user.following.splice(userIndex, 1);
  user.followingCount = user.following.length;
  currentUser.followers.splice(currentUserIndex, 1);
  await user.save({ new: true });
  await currentUser.save();
  res.status(200).json({
    success: true,
    message: "Unfollow operations successfull",
    data: user,
    currentUser,
  });
});

module.exports = {
  getSingleUser,
  getAllUsers,
  followUser,
  unfollowUser,
};
