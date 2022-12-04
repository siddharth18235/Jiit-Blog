const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const Blog = require("../models/blog");

const create = async (req, res, next) => {
  const { title, content, creator, creatorName, branch } = req.body;
  const blog = new Blog();
  blog.title = title;
  blog.content = content;
  blog.creator = creator;
  blog.branch = branch
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
    }).sort({ "createdAt": -1 });
  } 
  else {
    blogs = await Blog.find().sort({ "createdAt": -1 });
  }

  res.send({
    status: true,
    message: "Blogs fetched",
    data: {
      blogs,
    },
  });
};

const like = async (req, res, next) => {
  const blogId = req.params.id;


  const blog_1 = await Blog.findOneAndUpdate(
    {_id: blogId},
    { $pull:{ dislikes: req.body.userId } }, 
    {new: true}
  );
  let blog;
  if(blog_1.likes.find((elem) => {
    return elem == req.body.userId
  })){
    blog = await Blog.findOneAndUpdate(
      {_id: blogId},
      { $pull:{ likes: req.body.userId } }, 
      {new: true}
    );
  }else{
    blog = await Blog.findOneAndUpdate(
      {_id: blogId},
      { $addToSet:{ likes: req.body.userId } }, 
      {new: true}
  );
  }

  console.log(blog);

  res.send({
    status: true,
    message: "Updated The Like",
    likes: blog.likes.length,
    dislike: blog.dislikes.length
  });
};


const dislike = async (req, res, next) => {
  const blogId = req.params.id;

  const blog_1 = await Blog.findOneAndUpdate(
    {_id: blogId},
    { $pull:{ likes: req.body.userId } }, 
    {new: true}
  );
  let blog;
  if(blog_1.dislikes.find((elem) => {
    return elem == req.body.userId
  })){
    blog = await Blog.findOneAndUpdate(
      {_id: blogId},
      { $pull:{ dislikes: req.body.userId } }, 
      {new: true}
    );
  }
  else{
  blog = await Blog.findOneAndUpdate(
      {_id: blogId},
      { $addToSet:{ dislikes: req.body.userId } }, 
      {new: true}
  );
  }
  res.send({
    status: true,
    message: "Updated The Like",
    likes: blog.likes.length,
    dislike: blog.dislikes.length
  });
};

module.exports = { listAll, create, like , dislike};
