const _ = require('lodash');

module.exports = globals => serviceName => ({
  service: serviceName,
  get: params => query => body => globals.repositories[serviceName]
    .get(_.merge(params, query))(body),
  create: params => query => body => globals.repositories[serviceName].create(params)(body),
  update: params => query => body => globals.repositories[serviceName].update(params)(body),
  delete: params => query => body => globals.repositories[serviceName].delete(params)(body),
});
