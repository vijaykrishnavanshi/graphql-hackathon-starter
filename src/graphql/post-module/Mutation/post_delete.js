const { PostService } = require('../../../services');

const post_delete = async (root, { postId }) => {
  const post = await PostService.delete(postId);
  return post;
};

module.exports = post_delete;
