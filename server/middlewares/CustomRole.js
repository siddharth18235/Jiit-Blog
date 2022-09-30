const httpStatus = require('http-status')
const jwt = require('jsonwebtoken')

import { JWT_SECRET } from '../config/config'

const ROLES = {
    '1': 'Super Admin',
    '2': 'Admin',
    '3': 'Teacher',
    '4': 'Student',
  }

const send401WithMessage = (res) => {
  res.status(httpStatus.UNAUTHORIZED).json({
    message: 'You are not authorized to use this service',
  })
}

const auth_role = (role) => {
  return function (req, res, next) {
    const authorizationHeader = req.headers.authorization ?? ('')
    const parts = authorizationHeader.split(' ')
    if (parts.length === 2) {
      const token = parts[1]
      if (!token) {
        return send401WithMessage(res)
      }

      jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) {
          return send401WithMessage(res)
        }

        const { roleId } = payload
        if (roleId > role) {
          return send401WithMessage(res)
        }
        req.payload = payload
        next()
      })
    } else {
      return send401WithMessage(res)
    }
  }
}