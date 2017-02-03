'use strict';


const response = cb => (req, res, next) =>
  Promise.resolve(cb(req))
  .then(r => res.json(r))
  .catch(console.log);

module.exports = globals =>
  require('./routes')(globals)
    .forEach(route =>
      globals.router[route.method](route.route, response(route.cb)));
