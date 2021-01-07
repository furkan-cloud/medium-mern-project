const multer = require("multer");
const { cloudinary } = require("../../helpers/db/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }],
});
const profileImageUpload = multer({ storage: storage });

module.exports = profileImageUpload;
