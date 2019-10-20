const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const _user = {};

_user.schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },

    // system generated
    createdAt: {
      type: Number,
      required: true,
      default: Date.now,
    },
    updatedAt: { type: Number },
  },
  { usePushEach: true },
  { runSettersOnQuery: true },
);

_user.hashPassword = function hashPassword(password) {
  const saltRounds = 5;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

_user.schema.pre('save', function(next) {
  const user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  user.updatedAt = Date.now();
  user.password = _user.hashPassword(user.password);
  next();
});

_user.schema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
};

_user.schema.methods.safeObject = function() {
  const safeFields = ['_id', 'name', 'email', 'createdAt', 'updatedAt'];
  const newSafeObject = {};
  safeFields.forEach(elem => {
    // eslint-disable-next-line security/detect-object-injection
    newSafeObject[elem] = this[elem];
  });
  return newSafeObject;
};

_user.model = mongoose.model('users', _user.schema);

module.exports = _user;
