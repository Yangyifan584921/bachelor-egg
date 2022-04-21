'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.post('/admin/login', controller.admin.login);
  router.get('/admin/list', controller.admin.list);
  router.get('/admin/detail', controller.admin.detail);
  router.post('/admin/add', controller.admin.add);
  router.post('/admin/delete', controller.admin.delete);
};
