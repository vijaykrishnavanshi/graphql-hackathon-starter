const mongoose = require('mongoose');
const postService = require('../../src/services/postService');
const userService = require('../../src/services/userService');
// eslint-disable-next-line node/no-unpublished-require
const { expect } = require('chai');

describe('#postService()', async function() {
  beforeEach(async () => {
    await mongoose.connection.dropDatabase();
  });
  afterEach(async () => {
    await mongoose.connection.dropDatabase();
  });
  context('Create Post', async function() {
    it('success case', async function() {
      const user = await userService.signup({
        name: 'Test',
        email: `${parseInt(Math.random() * 1000, 10)}test@example.com`,
        password: '12345',
      });
      const postData = {
        title: 'Some Post',
        body: 'Some Body',
        createdBy: user._id,
      };
      const createdPost = await postService.create(postData);
      expect(createdPost.title).to.equal(postData.title);
      expect(createdPost.body).to.equal(postData.body);
    });
  });
  context('Update Post', async function() {
    it('success case', async function() {
      const user = await userService.signup({
        name: 'Test',
        email: `${parseInt(Math.random() * 1000, 10)}test@example.com`,
        password: '12345',
      });
      const postData = {
        title: 'Some Post',
        body: 'Some Body',
        createdBy: user._id,
      };
      const createdPost = await postService.create(postData);
      expect(createdPost.title).to.equal(postData.title);
      expect(createdPost.body).to.equal(postData.body);
      const dataToUpdate = { title: 'Hello', body: 'Somerhings' };
      const updatedPost = await postService.update(
        createdPost._id,
        dataToUpdate,
      );
      expect(updatedPost.title).to.equal(dataToUpdate.title);
      expect(updatedPost.body).to.equal(dataToUpdate.body);
    });
  });
  context('Delete Post', async function() {
    it('success case', async function() {
      const user = await userService.signup({
        name: 'Test',
        email: `${parseInt(Math.random() * 1000, 10)}test@example.com`,
        password: '12345',
      });
      const postData = {
        title: 'Some Post',
        body: 'Some Body',
        createdBy: user._id,
      };
      const createdPost = await postService.create(postData);
      expect(createdPost.title).to.equal(postData.title);
      expect(createdPost.body).to.equal(postData.body);
      const deletedPost = await postService.delete(createdPost._id);
      expect(deletedPost.title).to.equal(postData.title);
      expect(deletedPost.body).to.equal(postData.body);
    });
  });
});
