const _ = require('lodash');

module.exports = globals => modelName => ({
  get: meta => data => globals.db(`${modelName}s`).where(meta || true),
  create: meta => data => globals.db(`${modelName}s`).insert(data),
  update: meta => data => globals.db(`${modelName}s`).where(meta).update(_.merge(data, { updated_at: new Date().toUTCString() })),
  delete: meta => data => globals.db(`${modelName}s`).where(meta).delete(),
});
