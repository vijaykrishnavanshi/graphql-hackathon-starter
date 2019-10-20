const server = require('../../../../src/server');

// eslint-disable-next-line node/no-unpublished-require
const { expect } = require('chai');
const { fireGQLQuery } = require('../testGQLHandler');

describe('mutation post_create', async function() {
  context('Success Case', async function() {
    it('case1: ', async function() {
      const gqlQuery = `
        mutation {
          user_login(email: "vijay@indorse.io", password: "$$$12345") {
            token
            user {
              name
              email
            }
          }
        }
      `;
      const { data, errors } = await fireGQLQuery(server, gqlQuery);
      console.log(data, errors);
      expect(true).to.equal(true);
    });
    it('case2: ', async function() {
      expect(true).to.equal(true);
    });
  });
  context('Failure Case', async function() {
    it('case1: ', async function() {
      expect(true).to.equal(true);
    });
    it('case2: ', async function() {
      expect(true).to.equal(true);
    });
  });
});
