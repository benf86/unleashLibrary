const baseServices = require('./base');

const importBase = globals => model => Object.assign({}, baseServices(global)(model), require(`./${model}`)(globals));


module.exports = globals =>
  ({
    content: importBase(globals)('content'),
    user: importBase(globals)('user'),
  });
