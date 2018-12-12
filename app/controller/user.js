const u = require('../common/util');
const Controller = require('egg').Controller;

class UserController extends Controller {
  async find_user() {
    const { ctx } = this;
    const user_id = ctx.params.id;
    const res = await ctx.service.user.find(user_id);
    ctx.body = res;
  }
  async create_user() {
    const { app, ctx } = this;
    const { Joi } = app;
    const validate = {
      body: {
        username:Joi.string().required(),
        password:Joi.string().required(),
      },
    };
    u.validate(ctx, validate);
    await ctx.service.user.create(ctx.request.body);
    ctx.status = 201;
  }
}

module.exports = UserController;
