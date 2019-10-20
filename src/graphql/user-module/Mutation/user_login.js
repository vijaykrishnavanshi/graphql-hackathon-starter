const { UserService } = require('../../../services');

const user_login = async (root, { email, password }) => {
  const { token, user } = await UserService.login({ email, password });
  return { token, user };
};

module.exports = user_login;
