const Service = require('egg').Service;
const _ = require('lodash');
const u = require('../common/util');
class UserService extends Service {
  async find(uid) {
    const user = await this.app.mysql.get('admin', { id: uid });
    if (_.isNil(user)) {
      throw u.ohno.user.user_not_exist();
    }
    return user;
  }
  async create(data) {
    await this.app.mysql.insert('admin', data);
  }
}
module.exports = UserService;