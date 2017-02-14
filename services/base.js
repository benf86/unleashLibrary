module.exports = globals => serviceName => ({
  get: params => query => body => globals.repositories[serviceName].get(params)(query)(body),
  create: params => query => body => globals.repositories[serviceName].create(params)(query)(body),
  update: params => query => body => globals.repositories[serviceName].update(params)(query)(body),
  delete: params => query => body => globals.repositories[serviceName].delete(params)(query)(body),
});
