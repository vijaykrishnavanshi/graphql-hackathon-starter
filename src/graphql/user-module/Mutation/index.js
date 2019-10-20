// Construct a schema, using GraphQL schema language
const typeDefs = `
  input SignupForm {
    name: String!
    email: String!
    password: String!
  }
  extend type Mutation {
    user_signup(signupForm: SignupForm!): AuthPayload!
    user_login(email: String!, password: String!): AuthPayload!
  }
`;

const resolvers = {
  user_signup: require('./user_signup'),
  user_login: require('./user_login'),
};

module.exports = {
  typeName: 'Mutation',
  typeDefs,
  resolvers,
};
