'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
  // database configuration
  client: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'react_blog',    
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
}