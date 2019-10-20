const { PostService } = require('../../../services');

const post_create = async (root, { postForm }, { req }) => {
  const { authUser: loggedInUser } = req;
  const post = await PostService.create({
    ...postForm,
    createdBy: loggedInUser._id,
  });
  return post;
};

module.exports = post_create;
