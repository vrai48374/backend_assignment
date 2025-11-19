const { authenticate, authorize } = require('../../middlewares/auth.middleware');
router.get('/admin-only', authenticate, authorize('admin'), controller.adminOnly);
