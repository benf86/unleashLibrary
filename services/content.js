const _ = require('lodash');
const Promise = require('bluebird');
const baseServices = require('./base');

module.exports = (globals) => {
  const base = baseServices(globals)('content');
  return _.merge({}, base, {
    get: params => query => body => base.get(params)(_.omitBy(query, _.isNil))(body)
      .then(r =>
        Promise.all(r.map(e =>
          globals.repositories.user.get(e.id_author)()
          .then(author => _.merge(e, { author: {
            full_name: author.fullName,
            picture: author.picture,
          } }))))),

    getByUser: params => query => body => base.get({ id_author: params.id })(query)(body)
      .then(r =>
        Promise.all(r.map(e =>
          globals.repositories.user.get(e.id_author)()
          .then(author => _.merge(e, { author: {
            full_name: author.fullName,
            picture: author.picture,
          } }))))),

    nextStage: params => query => body => base.get({ id: params.id })(query)(body)
      .then(r => r.map(e => e.nextStage(params.stage)))
      .then(r => globals.repositories.content.update({ id: r[0].id })(_.omit(r[0].validate(), 'author')))
      .then(r => globals.services.content.get({ id: params.id })(query)(body)),

    create: params => query => body => base.create(params)(query)(body)
      .then(r => globals.services.content.get({ id: r[0] })(query)(body)),
  });
};
