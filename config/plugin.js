'use strict';

/** @type Egg.EggPlugin */
// exports.mysql = {
//   enable: true,
//   package: 'egg-mysql',
// };

module.exports = {
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // mysql简单操作
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  // 用来管理数据层代码、更友好的操作sql
  // sequelize: {
  //   enable: true,
  //   package: 'egg-sequelize',
  // },
};
