// Construct a schema, using GraphQL schema language
const typeDefs = `
  type User {
    name: String!
    email: String!
    createdAt: Date!
    updatedAt: Date!
  }
`;

const resolvers = {};

module.exports = {
  typeName: 'User',
  typeDefs,
  resolvers,
};
