'use strict';

const config = require('./config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

const globals = {
  utils: require('./utils')(this),
  config,
  router
};

require('./models')(globals);
require('./repositories')(globals);
require('./services')(globals);


router.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
router.use(bodyParser.json({ limit: '50mb' }));

require('./controllers/rest/router')(globals);
app.use(router);

console.log(`Server listening on port ${config.infrastructure.port}`);
app.listen(config.infrastructure.port);
