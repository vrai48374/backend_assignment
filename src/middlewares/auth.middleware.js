const jwt = require('jsonwebtoken');
const User = require('../modules/user/user.model');

exports.authenticate = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ message: 'Unauthorized' });
    const token = auth.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // contains sub, role, email
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

exports.authorize = (roles = []) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
  if (typeof roles === 'string') roles = [roles];
  if (roles.length && !roles.includes(req.user.role)) return res.status(403).json({ message: 'Forbidden' });
  next();
};
