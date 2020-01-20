module.exports = () => {
  return async function auth (ctx, next){
    console.log(ctx.session.openId)
    if(ctx.session.openId){
      await next()
    }else{
      ctx.status = 401;
      ctx.body = { desc: '没有登录' }
    }
  }
}