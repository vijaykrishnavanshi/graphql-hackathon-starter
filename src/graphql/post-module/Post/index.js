// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Post {
    _id: String!
    title: String!
    body: String!
    createdAt: Date!
    createdBy: User! @authenticated
    updatedAt: Date!
  }
`;

const resolvers = {
  createdBy: require('./createdBy'),
};

module.exports = {
  typeName: 'Post',
  typeDefs,
  resolvers,
};
