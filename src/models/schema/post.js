const mongoose = require('mongoose');
const { Schema } = mongoose;

const _post = {};

_post.schema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },

    // system generated
    createdAt: {
      type: Number,
      required: true,
      default: Date.now,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    updatedAt: {
      type: Number,
      default: Date.now,
    },
  },
  { usePushEach: true },
  { runSettersOnQuery: true },
);
_post.schema.methods.safeObject = function() {
  const safeFields = [
    '_id',
    'title',
    'body',
    'createdAt',
    'updatedAt',
    'createdBy',
  ];
  const newSafeObject = {};
  safeFields.forEach(elem => {
    // eslint-disable-next-line security/detect-object-injection
    newSafeObject[elem] = this[elem];
  });
  return newSafeObject;
};

_post.schema.pre('save', function(next) {
  const post = this;
  // only hash the password if it has been modified (or is new)
  if (!post.isModified()) return next();
  post.updatedAt = Date.now();
  next();
});

_post.model = mongoose.model('posts', _post.schema);

module.exports = _post;
