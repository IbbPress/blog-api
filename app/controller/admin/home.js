'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async login() {
    const { userName, password} = this.ctx.request.body;
    const results = await this.app.mysql.select('user', {
      where: { userName, password }
    });

    if (results.length) {
      //登录成功,进行session缓存
      let openId=new Date().getTime()
      this.ctx.session.openId = openId;
      this.ctx.body={'data':'登录成功','openId':openId}
    } else {
      this.ctx.status = 400;
      this.ctx.body={data:'登录失败'}
    }

  }
  async logout() {
    this.ctx.session.openId = null;
    this.ctx.status = 200;
    this.ctx.body = { desc: '已退出登录' }
  }

  async updatePost() {
    const row = this.ctx.request.body;
    const rowData = await this.app.mysql.get("article", { id: row.id });
    const results = await this.app.mysql.update('article', Object.assign(rowData, row));

    this.ctx.body={
      data: 'results'
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
}

module.exports = HomeController;
