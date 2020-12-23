const asyncErrorWrapper = require("express-async-handler");
const User = require("../../models/User");
const Post = require("../../models/Post");
const CustomError = require("../../helpers/error/CustomError");

const getPostOwnerAccess = asyncErrorWrapper(async (req, res, next) => {
  const userId = req.user.id;

  const postsId = req.params.id;

  const post = await Post.findById(postsId);

  if (post.author != userId) {
    return next(new CustomError("Only owner can handle this operation", 403));
  }
  next();
});

module.exports = getPostOwnerAccess;
