const express = require('express');
const { listAll,create } = require('../controllers/blog.controller');
const blogRouter = express.Router();

blogRouter.get('/listAll',listAll);
blogRouter.post('/create',create);
module.exports = blogRouter