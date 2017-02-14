module.exports = globals => modelName => ({
  get: params => query => body => globals.db(`${modelName}s`).where(params || true),
  create: params => query => body => globals.db(`${modelName}s`).insert(body),
  update: params => query => body => globals.db(`${modelName}s`).where(params).update(body),
  delete: params => query => body => globals.db(`${modelName}s`).where(params).delete(),
});
