'use strict';

const Controller = require('egg').Controller;

class adminController extends Controller {
  async login() {
    const { ctx, app } = this;
    const data = ctx.request.body;
    if (data.userName === 'yangyifan' && data.password === '123456') {
      // 通过jwt生成token
      const token = app.jwt.sign({
        userName: data.userName,
      }, app.config.jwt.secret, {
        expiresIn: 60 * 60 * 24,
      });
      ctx.body = {
        code: 0,
        token,
      };
    } else {
      ctx.body = {
        code: -200,
        message: '账号或密码错误',
      };
    }
  }

  async list() {
    const { ctx } = this;
    const resData = await ctx.service.admin.list();
    if (resData) {
      // ctx.body: 返回的内容
      ctx.body = {
        status: 200,
        code: 0,
        data: {
          list: resData,
          extra1: this.ctx.helper.formatUser('yangyifan'),
        },
      };
      ctx.body = this.ctx.response.ServerResponse.successRes(resData);
    } else {
      ctx.body = {
        status: 500,
        code: 1,
        message: '查询列表失败',
      };
    }
  }
  async detail() {
    const { ctx } = this;
    const resData = await ctx.service.admin.detail(ctx.query.id);
    if (resData) {
      ctx.body = {
        status: 200,
        code: 0,
        data: resData,
      };
    } else {
      ctx.body = {
        status: 500,
        code: 1,
        message: '查询详情失败',
      };
    }
  }
  async add() {
    const { ctx } = this;
    if (ctx.request.body && Object.keys(ctx.request.body).length) {
      const createData = {
        ...ctx.request.body,
      };
      const res = await ctx.service.admin.add(createData);
      if (res) {
        ctx.body = {
          status: 200,
          code: 0,
          data: res,
        };
      } else {
        ctx.body = {
          status: 500,
          code: 1,
          message: '添加失败',
        };
      }
    }
  }
  async delete() {
    const { ctx } = this;
    const resData = await ctx.service.admin.delete(ctx.request.body);
    if (resData) {
      ctx.body = {
        status: 200,
        code: 0,
        data: '删除成功',
      };
    } else {
      ctx.body = {
        status: 500,
        code: 1,
        message: '操作失败',
      };
    }
  }
}

module.exports = adminController;
