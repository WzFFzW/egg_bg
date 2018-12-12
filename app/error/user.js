const { catastrophic } = require('../common/catastrophic_singleton');

const category = {
  unique_code: 'USER',
  description: 'USER',
};

const errors = {
  user_not_exist: {
    unique_number: 0,
    http_code: 403,
  },
};

module.exports = function user_error() {
  return catastrophic().new_category(category, errors);
}