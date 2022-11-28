const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const Blog = require('../models/blog');
const create = async (req,res,next) => {
    const {title,content} = req.body;
    const blog = new Blog();
    blog.title = title;
    blog.content = content;
    blog.totalLikes = 0;
    blog.comments = [];
    await blog.save();
    res.json({
        status: true,
        message: 'Blog successfully created!',
        data: blog.toAuthJSON(),
      })
}
const listAll = async (req,res,next) => {
    const {userEmail} = req.body;
    console.log(userEmail);
    let blogs;
    if(userEmail != undefined){
        blogs = await Blog.find({email:{
            $ne: userEmail
        }}).sort({"timestamp":"desc"})
    }else{
        blogs = await Blog.find().sort({"timestamp":"desc"});
    }
    res.send(
        {
            status: true,
            message: 'Blogs fetched',
            data:{
                blogs
            }
        }
    )
}
module.exports = {listAll,create}