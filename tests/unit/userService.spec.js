const mongoose = require('mongoose');
const userService = require('../../src/services/userService');
// eslint-disable-next-line node/no-unpublished-require
const { expect } = require('chai');

describe('#userService()', function() {
  beforeEach(async () => {
    await mongoose.connection.dropDatabase();
  });
  afterEach(async () => {
    await mongoose.connection.dropDatabase();
  });
  context('signup', function() {
    it('success case', async function() {
      const userData = {
        name: 'Test',
        email: `${parseInt(Math.random() * 1000, 10)}test@example.com`,
        password: '12345',
      };
      const createdUser = await userService.signup(userData);
      expect(createdUser.name).to.equal(userData.name);
      expect(createdUser.email).to.equal(userData.email);
    });
  });
  context('log in', function() {
    it('success case', async function() {
      const userData = {
        name: 'Test',
        email: `${parseInt(Math.random() * 1000, 10)}test@example.com`,
        password: '12345',
      };
      const createdUser = await userService.signup(userData);
      expect(createdUser.name).to.equal(userData.name);
      expect(createdUser.email).to.equal(userData.email);
      const { token, user } = await userService.login({
        email: userData.email,
        password: userData.password,
      });
      expect(createdUser.name).to.equal(user.name);
      expect(createdUser.email).to.equal(user.email);
      expect(token).to.not.be.null;
    });
  });
});
