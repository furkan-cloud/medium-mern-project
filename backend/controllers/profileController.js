const User = require("../models/User");

const asyncErrorWrapper = require("express-async-handler");

const userProfileInfo = asyncErrorWrapper(async (req, res, next) => {
  console.log(req.user);
  const user = await User.findById(req.user.id).populate({
    path: "posts",
    select: "title content post_image",
  });
  res.status(200).json({
    success: true,
    user,
  });
});

const updateProfileInfo = asyncErrorWrapper(async (req, res, next) => {
  const editInfo = req.body;
  // console.log(req.user.userData);
  const user = await User.findByIdAndUpdate(req.user.id, editInfo, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    user,
  });
});

const imageUpload = asyncErrorWrapper(async (req, res, next) => {
  imageurl = req.file.path;
  //console.log(req.file.path);
  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      avatar_img: imageurl,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.json({
    success: true,
    message: "Upload Successfull",
    data: user,
  });
});

module.exports = {
  userProfileInfo,
  updateProfileInfo,
  imageUpload,
};
