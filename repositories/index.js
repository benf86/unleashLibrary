const content = require('./content');
const user = require('./user');

module.exports = globals => ({
  content: content(globals),
  user: user(globals),
});
