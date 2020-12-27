const express = require("express");
const {
  getAllPosts,
  addPost,
  getSinglePost,
  editPost,
  deletePost,
  likePost,
  undolikePost,
  clapsPost,
} = require("../controllers/postController");
const authCheck = require("../middlewares/auth/authCheck");
const postQuery = require("../middlewares/query/postQuery");
const getPostOwnerAccess = require("../middlewares/auth/getPostOwnerAccess");
const profileImageUpload = require("../middlewares/auth/profileImageUpload");
const checkPostExist = require("../middlewares/db/checkPostExist");
const Post = require("../models/Post");
const router = express.Router();

// /api/posts
/**
 * @route   GET api/posts/
 * @desc    Get All posts data
 * @access  Public
 */
router.get(
  "/",
  postQuery(Post, {
    population: {
      path: "author",
      select: "firstName lastName followersCount followingCount avatar_img",
    },
  }),
  getAllPosts
);
/**
 * @route   GET api/posts/add
 * @desc    Get All Posts data
 * @access  Private
 */
router.post(
  "/add",
  authCheck,
  profileImageUpload.single("post_image"),
  addPost
);
// router
//   .route("/add")
//   .post([authCheck, profileImageUpload.single("post_image")], addPost);
/**
 * @route   GET api/posts/:id
 * @desc    Get Single Post data
 * @access  Public
 */
router.get("/:id", checkPostExist, getSinglePost);
/**
 * @route   PUT api/posts/:id/edit
 * @desc    EditPost data
 * @access  Private
 */
router.put(
  "/:id/edit",
  [authCheck, checkPostExist, getPostOwnerAccess],
  editPost
);

/**
 * @route   PUT api/posts/:id/delete
 * @desc    Delete Post data
 * @access  Private
 */
router.delete(
  "/:id/delete",
  [authCheck, checkPostExist, getPostOwnerAccess],
  deletePost
);

/**
 * @route   PUT api/posts/:id/like
 * @desc    Delete Post data
 * @access  Private
 */
router.get("/:id/like", [authCheck, checkPostExist], likePost);
/**
 * @route   PUT api/posts/:id/undolike
 * @desc    Like Post data
 * @access  Private
 */
router.get("/:id/undolike", [authCheck, checkPostExist], undolikePost);
/**
 * @route   PUT api/posts/:id/claps
 * @desc    Claps Post data
 * @access  Private
 */
router.get("/:id/claps", [authCheck, checkPostExist], clapsPost);

module.exports = router;

// router.get("/:id/like", [getAccessToRoute, checkQuestionExist], likeQuestion);
// router.get(
//   "/:id/undo_like",
//   [getAccessToRoute, checkQuestionExist],
//   undoLikeQuestion
// );
