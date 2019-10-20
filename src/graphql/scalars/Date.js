const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

// Construct a schema, using GraphQL schema language
const typeDefs = `
  scalar Date
`;

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value); // ast value is always in string format
      }
      return null;
    },
  }),
};

module.exports = {
  typeName: 'Date',
  typeDefs,
  resolvers,
};
