'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //router.get('/', controller.home.index);
  app.router.resources('Rawcollector', '/api/v1/12', controller.Rawcollector);
};
