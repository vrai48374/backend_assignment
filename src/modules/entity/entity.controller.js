const Task = require('./entity.model');

exports.create = async (req, res, next) => {
  try {
    const data = { ...req.body, owner: req.user.sub };
    const task = await Task.create(data);
    res.status(201).json(task);
  } catch (err) { next(err); }
};

exports.list = async (req, res, next) => {
  try {
    const tasks = await Task.find({ owner: req.user.sub });
    res.json(tasks);
  } catch (err) { next(err); }
};

exports.get = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Not found' });
    res.json(task);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) { next(err); }
};
