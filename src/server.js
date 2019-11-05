const config = require('../config');
const logger = require('./helpers/logger');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema.gql');
const resolvers = require('./graphql/resolvers');
const Models = require('./models');
const ErrorHandler = require('./helpers/errorHandler');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return {
      Models,
      req,
    };
  },
  formatError: ErrorHandler.formatGQLError,
  introspection: true,
  playground: true,
});

const app = require('./app');

server.applyMiddleware({
  app,
  // change this if you wnat to host schema on a different path
  path: '/',
});

// Here you set the PORT and IP of the server
const port = config.PORT || 8001;
const ip = config.IP || '127.0.0.1';

app.listen({ port, ip }, () =>
  logger.info(`🚀 Server ready at http://${ip}:${port}${server.graphqlPath}`),
);

module.exports = app;
