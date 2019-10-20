const typeDefs = `
  extend type Query {
    post_list: [Post!]! @authenticated
    post_get(postId: String!): Post! @authenticated
  }
`;

const resolvers = {
  post_list: require('./post_list'),
  post_get: require('./post_get'),
};

module.exports = {
  typeName: 'Query',
  typeDefs,
  resolvers,
};
