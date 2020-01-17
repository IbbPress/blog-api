module.exports = app => {
  const { router, controller } = app;

  router.get('/default/index', controller.default.home.index)
  router.get('/default/getArticleList/', controller.default.home.getArticleList)
  router.get('/default/getArticle/:id',controller.default.home.getArticle)
  router.get('/default/getTypeInfo',controller.default.home.getTypeInfo)
  router.post('/default/updatePost',controller.default.home.updatePost)
  router.post('/default/post',controller.default.home.createPost)
  router.del('/default/post/:id',controller.default.home.delPost)
  router.post('/default/login',controller.default.home.login)
}