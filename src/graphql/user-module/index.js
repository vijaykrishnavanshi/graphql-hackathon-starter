const subModules = [
  require('./Query'),
  require('./Mutation'),
  require('./User'),
  require('./AuthPayload'),
  // Some Factor
];

const typeDefs = [];
const resolvers = {};

subModules.forEach(subModule => {
  typeDefs.push(subModule.typeDefs);
  resolvers[subModule.typeName] = subModule.resolvers;
});

module.exports = {
  typeDefs: typeDefs.join('\n'),
  resolvers,
};
