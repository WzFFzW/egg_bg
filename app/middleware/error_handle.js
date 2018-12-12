const { Catastrophe } = require('catastrophic');
const u = require('../common/util');

module.exports = (option, app) => async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    // do log;
    let err;
    if (e instanceof Catastrophe) {
      err = e;
    } else {
      err = u.ohno.common.caught_unknown_error(e);
    }
    ctx.status = err.error.http_code;
    ctx.body =  {
      error_category: err.identity_json().error_category,
      error_number: err.identity_json().error_number,
      error_code: err.identity(),
      error: option.debug ? err : undefined,
    };
  }
};