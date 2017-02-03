'use strict';

const _ = require('lodash');
const baseServices = require('./base');

const importBase = globals => model => Object.assign({}, baseServices(global)(model), require(`./${model}`)(globals));


module.exports = globals =>
  globals.services = {
    content: importBase(globals)('content'),
    user: importBase(globals)('user'),
  };