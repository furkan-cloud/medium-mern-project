const Post = require("../../models/Post");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../../helpers/error/CustomError");

const checkPostExist = asyncErrorWrapper(async (req, res, next) => {
  const postId = req.params.id || req.params.postId;

  // console.log(question_id);
  const post = await Post.findById(postId);

  if (!post) {
    return next(new CustomError("There is no such post with that id", 400));
  }
  next();
});

module.exports = checkPostExist;
