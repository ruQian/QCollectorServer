const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {
    groupid:'string',
    DOrP:'int',
    telNO:'string',
    messageDate:'string',
    rawMessage: 'string',
  };
  class rawcollectorController extends Controller {
    async create() {
      const ctx = this.ctx;
      console.log("------------------------------------------------------");
      console.log(ctx.request.body);
      console.log("------------------------------------------------------");
      // 校验 `ctx.request.body` 是否符合我们预期的格式
      // 如果参数校验未通过，将会抛出一个 status = 422 的异常
      ctx.validate(createRule, ctx.request.body);
      // 调用 service 创建一个 topic
      const id = await ctx.service.rawcollector.create(ctx.request.body);
      // 设置响应体和状态码
      ctx.body = {
        topic_id: id,
      };
      ctx.status = 201;
    }
  }
  module.exports = rawcollectorController;
  