const user_error = require('../error/user');
const common_error = require('../error/common_error');

module.exports = {
  user: user_error(),
  common: common_error(),
};