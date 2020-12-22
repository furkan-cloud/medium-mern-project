const express = require("express");
const User = require("../models/User");
const {
  getSingleUser,
  getAllUsers,
  followUser,
  unfollowUser,
} = require("../controllers/userController");
const checkUserExist = require("../middlewares/db/checkUserExist");
const authCheck = require("../middlewares/auth/authCheck");

const router = express.Router();

// /api/users
/**
 * @route   GET api/users/
 * @desc    Get All users data
 * @access  Public
 */
router.get("/", getAllUsers);
/**
 * @route   GET api/users/:id
 * @desc    Get  one user data
 * @access  Public
 */
router.get("/:id", checkUserExist, getSingleUser);
/**
 * @route   GET api/users/follow/:id
 * @desc    Get  one user data
 * @access  Public
 */

router.get("/follow/:id", [authCheck, checkUserExist], followUser);
router.get("/unfollow/:id", [authCheck, checkUserExist], unfollowUser);

module.exports = router;

//TODO filter sort query kısımları yapılıcak
