const { UserService } = require('../../../services');

const user_signup = async (root, { signupForm }) => {
  await UserService.signup(signupForm);
  const { token, user } = await UserService.login({
    email: signupForm.email,
    password: signupForm.password,
  });
  return { token, user };
};

module.exports = user_signup;
