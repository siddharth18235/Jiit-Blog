const mongoose = require("mongoose");
const schema = mongoose.Schema;
const autopopulate = require("mongoose-autopopulate");
const BlogSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  creatorName: {
    type: String,
    reference: "User",
    required: true,
  },
  totalLikes: {
    type: Number,
    required: true,
    default: 0,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    reference: "User",
    required: true,
    autopopulate: true,
  },
  comments: {
    type: [mongoose.Schema.Types.ObjectId],
    reference: "Blog",
    required: false,
    autopopulate: true,
  },
});
BlogSchema.plugin(autopopulate);
const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
