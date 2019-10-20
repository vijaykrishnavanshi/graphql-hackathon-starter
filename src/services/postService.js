const { Post } = require('../models');
const ErrorHandler = require('../helpers/errorHandler');

const _postService = {};

_postService.create = async ({ title, body, createdBy }) => {
  const post = new Post({ title, body, createdBy });
  await post.save();
  return post.safeObject();
};

_postService.update = async (postId, { title, body }) => {
  const post = await Post.findById(postId);
  if (!post) {
    ErrorHandler.throwError({ message: 'Post not found !', code: 404 });
  }
  post.title = title || post.title;
  post.body = body || post.body;
  await post.save();
  return post.safeObject();
};

_postService.delete = async postId => {
  const post = await Post.findById(postId);
  if (!post) {
    ErrorHandler.throwError({ message: 'Post not found !', code: 404 });
  }
  await Post.deleteOne({ _id: postId });
  return post.safeObject();
};

_postService.getPost = async (postId, createdBy) => {
  const post = await Post.findOne({ _id: postId, createdBy });
  if (!post) {
    ErrorHandler.throwError({ message: 'Post not found !', code: 404 });
  }
  return post.safeObject();
};

_postService.getPostList = async createdBy => {
  const posts = await Post.find({ createdBy });
  if (!posts) {
    ErrorHandler.throwError({ message: 'Post not found !', code: 404 });
  }
  return posts.map(elem => elem.safeObject());
};

module.exports = _postService;
