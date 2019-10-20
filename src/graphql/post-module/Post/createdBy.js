const createdBy = (root, args, { Models }) => {
  const post = root;
  const { User } = Models;
  return User.findById(post.createdBy);
};

module.exports = createdBy;
