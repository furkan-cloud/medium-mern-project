const mongoose = require("mongoose");
const slugify = require("slugify");
var moment = require("moment");

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: {
    type: String,
    minlength: [10, "Please provide a title with min lenght 10"],
    required: [true, "Please provide a title"],
    unique: true,
  },
  subtitle: {
    type: String,
    minlength: [10, "Please provide a title with min lenght 10"],
    required: [true, "Please provide a title"],
  },

  content: {
    type: String,
    minlength: [20, "Please provide a content with min lenght 20"],
    required: [true, "Please provide a content"],
  },
  post_image: {
    type: String,
    default: "default.jpg",
  },

  slug: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  formatDate: {
    type: String,
  },

  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  likes: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  likeCount: {
    type: Number,
    default: 0,
  },
  claps: {
    type: Number,
    default: 0,
  },
  topic: {
    type: String,
    default: "Self",
    enum: [
      "Arts & Entertainment",
      "Culture",
      "Equality",
      "Health",
      "Industry",
      "Personal Development",
      "Politics",
      "Programming",
      "Science",
      "Society",
      "Technology",
      "Self",
    ],
  },
  //   comments: [
  //     {
  //       type: mongoose.Schema.ObjectId,
  //       ref: "Comment",
  //     },
  //   ],
  //   commentsCount: {
  //     type: Number,
  //     default: 0,
  //   },
});

//TODO:// claps eklenecek

//Methods

PostSchema.methods.makeSlug = function (title) {
  return slugify(title, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    //   strict: false, // strip special characters except replacement, defaults to `false`
    //   locale: "vi", // language code of the locale to use
  });
};

//Pre Hooks

PostSchema.pre("save", function (next) {
  if (!this.isModified("title")) {
    next();
  }
  this.slug = this.makeSlug(this.title);
  this.formatDate = moment(Date.now()).format("MMM D");
  next();
});

module.exports = Post = mongoose.model("Post", PostSchema);
