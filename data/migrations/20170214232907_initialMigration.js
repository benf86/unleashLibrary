const contentStages = require('../../models/content').stages;

exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('contents', function (table) {
    table.increments('id');
    table.string('id_author');
    table.string('link');
    table.string('title');
    table.boolean('public');
    table.boolean('published');
    table.integer('upvotes');
    table.enu('stage', contentStages);
    table.timestamps();
    table.integer('created_by');
    table.string('id_unleash_path');
    table.string('id_unleash_node');
    table.string('type');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('contents');
};
