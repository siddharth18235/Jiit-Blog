const express = require('express');
const { listAll,create, like, dislike } = require('../controllers/blog.controller');

const blogRouter = express.Router();

blogRouter.post('/like/:id', like);
blogRouter.post('/dislike/:id', dislike);

blogRouter.get('/',listAll);
blogRouter.post('/',create);


module.exports = blogRouter