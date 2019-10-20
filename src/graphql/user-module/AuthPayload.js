// Construct a schema, using GraphQL schema language
const typeDefs = `
  type AuthPayload {
    token: String!
    user: User!
  }
`;

const resolvers = {};

module.exports = {
  typeName: 'AuthPayload',
  typeDefs,
  resolvers,
};
