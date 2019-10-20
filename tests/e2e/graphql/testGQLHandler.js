// eslint-disable-next-line node/no-unpublished-require
const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

async function fireGQLQuery(server, gqlQuery) {
  const { body } = await chai
    .request(server)
    .post('/graphql')
    .send({
      query: gqlQuery,
    });
  return body || {};
}

module.exports = { fireGQLQuery };
