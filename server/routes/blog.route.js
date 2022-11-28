const express = require('express');
const { listAll,create } = require('../controllers/blog.controller');
const blogRouter = express.Router();

blogRouter.post('/listAll',listAll);
blogRouter.post('/create',create);
module.exports = blogRouter