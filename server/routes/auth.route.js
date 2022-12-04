const express = require('express');
const { login, register } = require('../controllers/auth.controller');

const authRoute = express.Router();

authRoute.post('/login',login);
authRoute.post('/signup',register);

module.exports = authRoute