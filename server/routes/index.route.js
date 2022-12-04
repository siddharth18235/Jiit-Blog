const express = require('express');

const authRoute = require('./auth.route');
const blogRoute = require('./blog.route');

const indexRoute = express.Router();

indexRoute.use('/auth',authRoute);
indexRoute.use('/blog',blogRoute)

module.exports = indexRoute;