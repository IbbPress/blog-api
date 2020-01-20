module.exports = app => {
  const { router, controller } = app;
  const home = controller.default.home;
  const adminHome = controller.admin.home;
  const adminAuth = app.middleware.adminAuth();

  router.post('/ibb/admin/v1/login',    adminHome.login)
  router.post('/ibb/admin/v1/logout',   adminHome.logout)

  router.get('/ibb/admin/v1/posts',     adminAuth, home.getArticleList)
  router.get('/ibb/admin/v1/posts/:id', adminAuth, home.getArticle)

  router.post('/ibb/admin/v1/posts',    adminAuth, adminHome.createPost)
  router.put('/ibb/admin/v1/posts',     adminAuth, adminHome.updatePost)
  router.del('/ibb/admin/v1/posts/:id', adminAuth, adminHome.delPost)

  router.get('/ibb/admin/v1/TypeInfo',  adminAuth, home.getTypeInfo)
}