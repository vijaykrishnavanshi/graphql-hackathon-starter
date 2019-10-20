const jwt = require('jsonwebtoken');
const config = require('../../config');
const { User } = require('../models');
const ErrorHandler = require('../helpers/errorHandler');

const _userService = {};

_userService.signup = async ({ name, email, password }) => {
  const user = new User({ name, email, password });
  await user.save();
  return user.safeObject();
};

_userService.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    ErrorHandler.throwError({
      message: 'User with this email not found !',
      code: 404,
    });
  }
  const isCorrect = user.comparePassword(password);
  if (!isCorrect) {
    ErrorHandler.throwError({
      message: 'Wrong Password !',
      code: 401,
    });
  }
  let token = jwt.sign(user.safeObject(), config.JWT_SECRET, {
    expiresIn: '24h',
  });
  return { token, user: user.safeObject() };
};

module.exports = _userService;
