const User = require('../models/user');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');


const login = async (req,res,next) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user || !user.validPassword(password))
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, 'Invalid email or password')
    res.json({ message: 'Login success.', data: user.toAuthJSON() })
}

const register = async (req,res,next) => {
    const { first_name, last_name, email, password , role_id } = req.body
    const user = new User()
    user.firstName = first_name
    user.lastName = last_name
    user.email = email
    user.roleId = role_id 
    user.setPassword(password)
    await user.save()

    res.json({
      status: true,
      message: 'User successfully created!',
      data: user.toAuthJSON(),
    })
}

module.exports = {login,register};