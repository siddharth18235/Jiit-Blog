const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const uniqueValidator = require("mongoose-unique-validator");
const privateValidator = require("mongoose-private");
const autopopulate = require('mongoose-autopopulate');
const { JWT_SECRET, JWT_EXPIRE } = require("../config/config");
const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    hash_password: {
      type: String,
      private: true,
    },
    salt: {
      type: String,
      private: true,
    },
    blogsCreated: {
      type: [mongoose.Schema.Types.ObjectId],
      required: false,
      autopopulate: true
    },
    roleId: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const ROLES = {
  '1': 'Super Admin',
  '2': 'Admin',
  '3': 'Teacher',
  '4': 'Student',
}
UserSchema.plugin(uniqueValidator);
UserSchema.plugin(privateValidator);
UserSchema.plugin(autopopulate)

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash_password = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

UserSchema.methods.validPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash_password === hash;
};

UserSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      userId: this._id,
      roleId: this.roleId,
      email: this.email,
      phone: this.phone,
      locationId: this.locationId,
    },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRE,
    }
  );
};

UserSchema.methods.toAuthJSON = function () {
  const { firstName, lastName, email, roleId, id, phone } = this;
  return {
    role: {
      roleId,
      name: ROLES[roleId.toString()],
      firstName,
      lastName,
      userId: id,
    },
    email,
    phone,
    token: this.generateJWT(),
  };
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
