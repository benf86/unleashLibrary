const _ = require('lodash');
const baseServices = require('./base');

module.exports = globals => _.merge({}, baseServices(globals)('user'), {});
