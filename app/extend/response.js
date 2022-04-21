'use strict';

// 使用方式：this.ctx.response.ServerResponse.successRes(resData)
// code的定义
const SUCCESS = 1;
const ERROR = 0;

class MyResponseData {
  constructor(status, msg, data) {
    this.msg = msg;
    this.data = data;
    this.status = status;
  }
  static successRes(data) {
    return new MyResponseData(SUCCESS, 'success', data);
  }
  static errorRes(msg, data) {
    return new MyResponseData(ERROR, msg, data);
  }
}
module.exports = {
  ServerResponse: MyResponseData,
};
