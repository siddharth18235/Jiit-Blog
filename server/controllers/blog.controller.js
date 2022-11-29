const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const Blog = require("../models/blog");
const create = async (req, res, next) => {
  const { title, content, creator, creatorName } = req.body;
  const blog = new Blog();
  blog.title = title;
  blog.content = content;
  blog.totalLikes = 0;
  blog.creator = creator;
  blog.creatorName = creatorName;
  blog.comments = [];
  await blog.save();
  res.json({
    status: true,
    message: "Blog successfully created!",
    data: blog,
  });
};
const listAll = async (req, res, next) => {
  const { userId } = req.body;
  let blogs;
  if (userId != undefined) {
    blogs = await Blog.find({
      creator: {
        $ne: userId,
      },
    }).sort({ timestamp: "desc" });
  } else {
    blogs = await Blog.find().sort({ timestamp: "desc" });
  }
  res.send({
    status: true,
    message: "Blogs fetched",
    data: {
      blogs,
    },
  });
};
module.exports = { listAll, create };
