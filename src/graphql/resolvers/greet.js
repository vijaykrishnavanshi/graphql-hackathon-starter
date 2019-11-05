const greet = async (root, { name }) => {
  return `Hello ${name}!`;
};

module.exports = greet;
