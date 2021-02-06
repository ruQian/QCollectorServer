'use strict';

//https://www.jianshu.com/p/2f78b1c88c51
/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  validate: {
    enable: true,
    package: "egg-validate"
  },
  //mysql : {
  //  enable: true,
  //  package: 'egg-mysql',
  //},
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  } 
};