/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1635218479483_9889';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 使用mysql时的配置
  config.mysql = {
    // database configuration
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '1020043895',
      // 库的名字
      database: '620231417_class',
    },
    app: true,
    agent: false,
  };
  // 使用egg-sqquelize的配置
  // config.sequelize = {
  //   dialect: 'mysql',
  //   port: 3306,
  //   database: '620231417_library',
  //   user: 'root',
  //   password: '1020043895',
  // };
  config.bodyParser = {
    enable: true,
  };
  /**
   * 跨域处理start
   */
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 跨域白名单
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET, POST, HEAD, DELETE',
  };
  /**
   * 跨域处理end
   */
  // jwt鉴权配置
  config.jwt = {
    // token的加密的密钥
    secret: '123456',
  };

  return {
    ...config,
    ...userConfig,
  };
};
