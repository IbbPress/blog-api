'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    let result = await this.app.mysql.get('blog_content', {})
    console.log(result)
    this.ctx.body = result;
  }
  async getArticleList () {
    const { type } = this.ctx.query;
    const results = await this.app.mysql.select("article", type ? {
      where: { type_id: type }
    } : {});

    this.ctx.body={
      data: results
    }
  }
  async getArticle() {
    const { id } = this.ctx.params;
    const results = await this.app.mysql.get("article", { id });

    this.ctx.body={
      data: results
    }
  }

  async getTypeInfo() {
    const results = await this.app.mysql.select("type_table");

    this.ctx.body={
      data: results
    }
  }
  async updatePost() {
    const { id } = this.ctx.params;
    const row = this.ctx.request.body;
    const rowData = await this.app.mysql.get("article", { id });
    const results = await this.app.mysql.update('article', Object.assign(rowData, row));

    this.ctx.body={
      data: results
    }
  }
  async createPost() {
    const row = this.ctx.request.body
    const results = await this.app.mysql.insert('article', row);

    this.ctx.body={
      data: results
    }
  }
  async delPost() {
    const { id } = this.ctx.params;
    const results = await this.app.mysql.delete('article', {id});

    this.ctx.body={
      data: results
    }
  }
  async login() {
    const { userName, password} = this.ctx.request.body;
    const results = await this.app.mysql.select('user', {
      where: { userName, password }
    });

    if (results.length) {
      //登录成功,进行session缓存
      let openId=new Date().getTime()
      this.ctx.session.openId={ 'openId':openId }
      this.ctx.body={'data':'登录成功','openId':openId}
    } else {
      this.ctx.status = 400;
      this.ctx.body={data:'登录失败'}
    }

  }
}

module.exports = HomeController;
