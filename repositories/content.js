const _ = require('lodash');
const baseRepositories = require('./base');
const Content = require('../models/content');

module.exports = (globals) => {
  const base = baseRepositories(globals)('content');
  return _.merge({}, base, {
    get: meta => data => base.get(_.omitBy(meta, _.isNil))(data)
      .then(r => r.map(e => new Content(e))),
  });
};
