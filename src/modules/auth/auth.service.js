const User = require('../user/user.model');
const { hash, compare } = require('../../utils/hash');
const { signToken } = require('../../utils/jwt');

exports.register = async ({ name, email, password }) => {
  const existing = await User.findOne({ email });
  if (existing) throw Object.assign(new Error('Email already registered'), { status: 400 });
  const hashed = await hash(password);
  const user = await User.create({ name, email, password: hashed });
  return user;
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw Object.assign(new Error('Invalid credentials'), { status: 401 });
  const match = await compare(password, user.password);
  if (!match) throw Object.assign(new Error('Invalid credentials'), { status: 401 });
  const token = signToken({ sub: user._id, role: user.role, email: user.email });
  return token;
};
