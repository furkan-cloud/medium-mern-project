const express = require("express");
const {
  register,
  login,
  logout,
  currentUser,
} = require("../controllers/authController");
const authCheck = require("../middlewares/auth/authCheck");

const router = express.Router();
/**
 * @access : Public
 * @desc : Register endpoint
 * @route :Post  /api/auth/register
 */
router.post("/register", register);
/**
 * @access : Public
 * @desc : Register endpoint
 * @route :Post  /api/auth/login
 */

router.post("/login", login);
/**
 * @access : Privite
 * @desc : Register endpoint
 * @route :Post  /api/auth/logout
 */
router.get("/logout", authCheck, logout);
/**
 * @route   GET api/auth/user
 * @desc    Get user data
 * @access  Private
 */
router.get("/user", authCheck, currentUser);
module.exports = router;
