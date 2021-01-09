const User = require("../models/User");

const asyncErrorWrapper = require("express-async-handler");

const userProfileInfo = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findById(req.user.id)
    .populate("following")
    .populate({
      path: "readingList", // populate blogs
      populate: {
        path: "author", // in blogs, populate comments
      },
    })
    .populate({
      path: "posts", // populate blogs
      populate: {
        path: "author", // in blogs, populate comments
      },
    })
    .select("-password");
  res.status(200).json({
    success: true,
    user,
  });
});

const updateProfileInfo = asyncErrorWrapper(async (req, res, next) => {
  const editInfo = req.body;
  // console.log(req.file.path);
  // console.log(req.body);
  // const imageurl = req.file.path;
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { ...editInfo },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    success: true,
    user,
  });
});

const imageUpload = asyncErrorWrapper(async (req, res, next) => {
  const imageurl = req.file.path;
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
    user,
  });
});

module.exports = {
  userProfileInfo,
  updateProfileInfo,
  imageUpload,
};
