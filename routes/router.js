const express = require("express");
const authRouter = require("./authRouter");
const profileRouter = require("./profileRouter");
const userRouter = require("./userRouter");
const postRouter = require("./postRouter");

const router = express.Router();
/**
 * @desc : Route for Auth
 * @route :Post  /api/auth
 */
router.use("/auth", authRouter);
/**
 * @desc : Route for Profile
 * @route :Post  /api/profile
 */
router.use("/profile", profileRouter);
/**
 * @desc : Route for User
 * @route :Post  /api/users
 */
router.use("/users", userRouter);

/**
 * @desc : Route for Post
 * @route :Post  /api/posts
 */
router.use("/posts", postRouter);

module.exports = router;
