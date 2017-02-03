'use strict';


module.exports = globals =>
  require('./content')(globals)
  .concat(require('./user')(globals));