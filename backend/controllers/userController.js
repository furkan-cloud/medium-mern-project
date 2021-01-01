const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");

const getSingleUser = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id).populate("posts");
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

  if (currentUser.following.includes(user._id)) {
    return next(new CustomError("You already follow this user", 400));
  }
  await currentUser.following.push(user._id);
  await user.followers.push(currentUser._id);

  currentUser.followingCount = currentUser.following.length;
  user.followersCount = user.followers.length;
  await user.save({ new: true });
  await currentUser.save({ new: true });

  res.status(200).json({
    success: true,
    message: "Followed operations successfull",
    data: currentUser,
  });
});

//TODO Client tarafına gonderireken populate yapılıcak
const unfollowUser = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  let user = await User.findById(id);
  let currentUser = await User.findById(req.user.id);

  if (!currentUser.following.includes(user._id)) {
    return next(new CustomError("You can not  unfollow  this user", 400));
  }

  const currentUserIndex = currentUser.following.indexOf(user._id);
  const userIndex = user.followers.indexOf(currentUser._id);
  currentUser.following.splice(currentUserIndex, 1);
  currentUser.followingCount = currentUser.following.length;
  user.followers.splice(userIndex, 1);
  user.followersCount = user.followers.length;
  await user.save({ new: true });
  await currentUser.save({ new: true });
  res.status(200).json({
    success: true,
    message: "Unfollow operations successfull",
    data: currentUser,
  });
});

module.exports = {
  getSingleUser,
  getAllUsers,
  followUser,
  unfollowUser,
};
