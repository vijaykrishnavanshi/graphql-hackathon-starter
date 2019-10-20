const { PostService } = require('../../../services');

const post_list = async (root, args, { req }) => {
  const { authUser: loggedInUser } = req;
  const posts = await PostService.getPostList(loggedInUser._id);
  return posts || [];
};

module.exports = post_list;
