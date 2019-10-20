// Construct a schema, using GraphQL schema language
const typeDefs = `
  input PostForm {
    title: String!
    body: String!
  }

  extend type Mutation {
    post_create(postForm: PostForm!): Post! @authenticated
    post_update(postId: String!, postForm: PostForm!): Post! @authenticated
    post_delete(postId: String!): Post! @authenticated
  }
`;

const resolvers = {
  post_create: require('./post_create'),
  post_update: require('./post_update'),
  post_delete: require('./post_delete'),
};

module.exports = {
  typeName: 'Mutation',
  typeDefs,
  resolvers,
};
