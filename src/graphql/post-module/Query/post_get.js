const { PostService } = require('../../../services');

const post_get = async (root, { postId }, { req }) => {
  const { authUser: loggedInUser } = req;
  const post = await PostService.getPost(postId, loggedInUser._id);
  return post;
};

module.exports = post_get;
