const _ = require('lodash');
const baseServices = require('./base');

module.exports = globals => {
  const base = baseServices(globals)('content');
  return _.merge({}, base, {});
};
