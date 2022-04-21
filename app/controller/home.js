'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { id } = ctx.query;
    ctx.body = id;
    // 查找数据1
    // const result = await ctx.app.mysql.get('students', { id: 620231417 });
    // 查找数据2
    // const result = await ctx.app.mysql.select('students', {
    //   where: { id: 620231418 },
    // });
    // 插入数据
    // const result = await ctx.app.mysql.insert('students', { id: 620231419, stuName: '宣亚平', stuPro: '嵌入式', grade: 3 });
    // 修改数据
    // const result = await ctx.app.mysql.update('students', { id: 620231419, grade: 10 });
    // 删除数据
    // const result = await ctx.app.mysql.delete('students', { id: 620231419 });
    // ctx.body = result;
  }
}

module.exports = HomeController;
