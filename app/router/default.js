module.exports = app => {
  const { router, controller } = app;
  const home = controller.default.home;

  router.get('/ibb/v1/posts',     home.getArticleList)
  router.get('/ibb/v1/posts/:id', home.getArticle)

  router.get('/ibb/v1/TypeInfo',  home.getTypeInfo)
}