'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  app.router.resources('rawcollector', '/api/v1/rawcollector', controller.rawcollector);
};
