require('./db');
const _models = {
  User: require('./schema/user').model,
  Post: require('./schema/post').model,
};

module.exports = _models;
