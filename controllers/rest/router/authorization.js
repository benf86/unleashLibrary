const config = require('../../../config')();

module.exports = req => (config.authorizationKeys[req.headers.authorization]
  ? config.authorizationKeys[req.headers.authorization]
  : false);
