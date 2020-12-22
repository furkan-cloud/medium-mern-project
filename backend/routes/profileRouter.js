const express = require("express");
const authCheck = require("../middlewares/auth/authCheck");

const {
  userProfileInfo,
  updateProfileInfo,
  imageUpload,
} = require("../controllers/profileController");
const profileImageUpload = require("../middlewares/auth/profileImageUpload");

const router = express.Router();

/**
 * @access : Private
 * @desc : Login endpoint
 * @route :Post  /api/profile
 */
router.get("/", authCheck, userProfileInfo);

/**
 * @route   PUT /api/profile/update
 * @desc    Update Profile endpoint
 * @access  Private
 */
router.put("/update", authCheck, updateProfileInfo);
/**
 * @route   PUT /api/profile/upload
 * @desc    Update Profile endpoint
 * @access  Private
 */

router.post(
  "/upload",
  [authCheck, profileImageUpload.single("avatar_img")],
  imageUpload
);

module.exports = router;
