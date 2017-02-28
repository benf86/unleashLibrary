const Promise = require('bluebird');

const routes = require('./routes');
const authorization = require('./authorization');

const response = cb => (req, res, next) => (!authorization(req)
  ? res.status(403) && res.send()
  : Promise.resolve(cb(req.params)(req.query)(req.body))
  .then(r => Array.isArray(r)
    ? r.map(e => e.validate())
    : r)
  .tap(r => Array.isArray(r) && r.length === 0
    ? res.status(404)
    : res.status(200))
  .then(r => res.json(r))
  .catch((e) => {
    console.error(e);
    res.json(e.code === 'SQLITE_ERROR' ? e.message : e);
  }));

module.exports = globals =>
  (routes(globals)
    .forEach(route =>
      globals.router[route.method](route.route, response(route.cb))));
