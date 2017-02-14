const _ = require('lodash');
const baseServices = require('./base');

module.exports = globals => {
  return _.merge({}, baseServices(globals)('content'), {});
}
