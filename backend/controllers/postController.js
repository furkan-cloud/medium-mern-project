const Post = require("../models/Post");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");
const User = require("../models/User");

const addPost = asyncErrorWrapper(async (req, res, next) => {
  const postInfo = req.body;
  const imgUrl = req.file.path;
  // console.log(req.body);
  // console.log(req.file);

  const currentUser = await User.findById(req.user.id);

  const post = await Post.create({
    ...postInfo,
    author: req.user.id,
    post_image: imgUrl,
  });

  currentUser.posts.push(post._id);
  await currentUser.save();

  res.status(200).json({
    success: true,
    post: post,
    //currentUser,
  });
});

//TODO:// author getAllPost

const getAllPosts = asyncErrorWrapper(async (req, res, next) => {
  // const posts = await Post.find();
  // //TODO:1 Pagination and search query eklenecek ve author populate eklenecek
  // return res.status(200).json(posts);
  return res.status(200).json(res.queryResults);
});
const getSinglePost = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findById(id).populate("author").sort("-createdAt");

  res.status(200).json({
    success: true,
    data: post,
  });
});

const editPost = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  const { title, subtitle, content } = req.body;
  let post = await Post.findById(id);
  (post.title = title), (post.content = content), (post.subtitle = subtitle);
  post = await post.save();
  res.status(200).json({
    success: true,
    data: post,
  });
});

const deletePost = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  let post = await Post.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: "Delete operations successfull",
  });
});

const likePost = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  let post = await Post.findById(id);
  let currentUser = await User.findById(req.user.id);

  if (post.likes.includes(req.user.id)) {
    return next(new CustomError("You already liked this post", 400));
  }
  post.likes.push(req.user.id);
  currentUser.readingList.push(post._id);
  currentUser.readingListCount = currentUser.readingList.length;
  post.likeCount = post.likes.length;
  await post.save();
  await currentUser.save();

  res.status(200).json({
    success: true,
    message: "Liked operations successfull",
    data: post,
    currentUser,
  });
});

const undolikePost = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  let post = await Post.findById(id);
  let currentUser = await User.findById(req.user.id);
  if (!post.likes.includes(req.user.id)) {
    return next(new CustomError("You can not  undo  this post", 400));
  }
  const index = post.likes.indexOf(req.user.id);
 const userIndex = currentUser.readingList.indexOf(post._id);
  post.likes.splice(index, 1);
  currentUser.readingList.splice(userIndex,1)
  currentUser.readingListCount = currentUser.readingList.length
  post.likeCount = post.likes.length;
  await post.save();
  await currentUser.save()

  res.status(200).json({
    success: true,
    message: "UnLiked operations successfull",
    data: post,
    currentUser
  });
});

const clapsPost = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  let post = await Post.findById(id);

  post.claps++;
  await post.save();

  res.status(200).json({
    success: true,
    message: "Claps operations successfull",
    data: post,
  });
});

module.exports = {
  getAllPosts,
  addPost,
  getSinglePost,
  editPost,
  deletePost,
  likePost,
  undolikePost,
  clapsPost,
};
