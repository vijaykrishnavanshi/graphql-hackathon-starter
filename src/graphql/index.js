const { merge } = require('lodash');
const baseModule = {};
baseModule.typeDefs = `
  directive @authenticated on FIELD_DEFINITION | OBJECT
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  type Subscription {
    _empty: String
  }
`;
baseModule.resolvers = {};

const modules = [
  baseModule,
  require('./user-module'),
  require('./post-module'),
  require('./scalars'),
  // Modules
];

const typeDefs = modules.map(internalModule => internalModule.typeDefs);
const resolvers = modules.map(internalModule => internalModule.resolvers);
const schemaDirectives = require('./directives');

module.exports = {
  typeDefs,
  resolvers: merge(...resolvers),
  schemaDirectives,
};
