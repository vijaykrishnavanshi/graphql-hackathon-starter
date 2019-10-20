const { defaultFieldResolver } = require('graphql');
const { SchemaDirectiveVisitor } = require('graphql-tools');

class AuthDirective extends SchemaDirectiveVisitor {
  visitObject() {}
  // Visitor methods for nested types like fields and arguments
  // also receive a details object that provides information about
  // the parent and grandparent types.
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...args) {
      const context = args[2];
      const { isAuthenticated } = context.req;
      if (isAuthenticated) {
        const result = await resolve.apply(this, args);
        return result;
      } else {
        throw new Error(
          'You must be the authenticated user to get this information',
        );
      }
    };
  }
}

module.exports = AuthDirective;
