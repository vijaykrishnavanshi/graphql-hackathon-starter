const typeDefs = `
extend type Query {
  user_hello: String!
}
`;

const resolvers = {
  user_hello: require('./user_hello'),
};

module.exports = {
  typeName: 'Query',
  typeDefs,
  resolvers,
};
