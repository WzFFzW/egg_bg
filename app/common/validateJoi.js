const ohno = require('./ohno');
module.exports = (ctx, validate) => {
  const error = ctx.validateJoi(validate);
  if (error) {
    throw ohno.common.param_not_validate(error);
  }
  return error;
}