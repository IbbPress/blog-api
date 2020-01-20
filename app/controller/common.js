'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

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
    console.log('id: ', id);
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
}

module.exports = HomeController;
