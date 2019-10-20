const { PostService } = require('../../../services');

const post_update = async (root, { postId, postForm }) => {
  const post = await PostService.update(postId, {
    ...postForm,
  });
  return post;
};

module.exports = post_update;
