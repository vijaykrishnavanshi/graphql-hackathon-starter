const hello = async (root, args, { Models }) => {
  const { User } = Models;
  const user = await User.findOne({})
    .lean()
    .exec();
  console.log(user);
  return 'Hello user!';
};

module.exports = hello;
