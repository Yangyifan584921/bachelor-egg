'use strict';
// service是对具体业务逻辑的处理，一般来说，是对数据库进行增删改查，逻辑判断等
const Service = require('egg').Service;

class adminService extends Service {
  async list() {
    const { app } = this;
    try {
      const res = await app.mysql.select('students');
      return res;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  async detail(id) {
    const { app } = this;
    try {
      const res = await app.mysql.select('borrow', { where: { stuId: id } });
      return res;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  async add(params) {
    const { app } = this;
    try {
      const res = await app.mysql.insert('books', params);
      return res;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  async delete(params) {
    const { app } = this;
    const deleteIds = params.ids;
    let res;
    for (let i = 0; i < deleteIds.length; i++) {
      try {
        await app.mysql.delete('books', { id: deleteIds[i] });
        res = true;
      } catch (err) {
        res = false;
      }
    }
    return res;
  }
}
module.exports = adminService;
