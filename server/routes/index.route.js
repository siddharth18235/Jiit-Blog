const express = require('express');
const authRoute = require('./auth.route');
const indexRoute = express.Router();

indexRoute.use('/auth',authRoute);

module.exports = indexRoute;