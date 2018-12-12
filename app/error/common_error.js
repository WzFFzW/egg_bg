const { catastrophic } = require('../common/catastrophic_singleton');

const category = {
  unique_code: 'CM',
  description: 'CM_ER',
};

const errors = {
  param_not_validate: {
    unique_number: 0,
    http_code: 400,
  },
  caught_unknown_error: {
    unique_number: 1,
    http_code: 500,
  },
};

module.exports = function common_error() {
  return catastrophic().new_category(category, errors);
}