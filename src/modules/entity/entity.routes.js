const express = require('express');
const router = express.Router();
const controller = require('./entity.controller');
const { authenticate, authorize } = require('../../middlewares/auth.middleware');

router.post('/', authenticate, controller.create);
router.get('/', authenticate, controller.list);
router.get('/:id', authenticate, controller.get);
router.put('/:id', authenticate, controller.update);
router.delete('/:id', authenticate, authorize('admin'), controller.remove);

module.exports = router;
