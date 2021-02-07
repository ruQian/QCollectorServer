const Service = require('egg').Service;

class rawcollectorService extends Service {
  constructor(ctx) {
    super(ctx);
    



  }

  async create(params) {
    const ctx = this.ctx;
    //存储数据库
    console.log(params);
    console.log(ctx.model.Qmessagedata);

    ctx.model.Qmessagedata.create(params);
    return 100;
  }

  // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
  checkSuccess(result) {
    if (result.status !== 200) {
      const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
      this.ctx.throw(result.status, errorMsg);
    }
    if (!result.data.success) {
      // 远程调用返回格式错误
      this.ctx.throw(500, 'remote response error', { data: result.data });
    }
  }
}

module.exports = rawcollectorService;
