module.exports = app => {
  const { router, controller } = app;
  const home = controller.default.home;

  router.get('/ibb/v1/index', home.index)

  router.get('/ibb/v1/posts',     home.getArticleList)
  router.get('/ibb/v1/posts/:id', home.getArticle)
  router.post('/ibb/v1/posts/',   home.createPost)
  router.put('/ibb/v1/posts/:id', home.updatePost)
  router.del('/ibb/v1/posts/:id', home.delPost)

  router.get('/ibb/v1/TypeInfo',  home.getTypeInfo)
  router.post('/ibb/v1/login',    home.login)
}