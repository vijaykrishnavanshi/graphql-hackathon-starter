const user_hello = require('./resolvers/user_hello');
const user_login = require('./resolvers/user_login');
const user_signup = require('./resolvers/user_signup');

const _resolvers = {
    Query: {
        hello,
    },
    Mutation: {
        greet,
        user_signup,
    },
};

module.exports = _resolvers;
