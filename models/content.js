const joi = require('joi');
const { Base } = require('./base');


class Content extends Base {
  constructor(params) {
    super();
    this.id = params.id;
    this.type = params.type;
    this.author = params.author;
    this.link = params.link;
    this.public = !!params.public;
    this.published = !!params.published;
    this.upvotes = params.upvotes;
    this.createdAt = params.created_at || new Date().toUTCString();
    this.modifiedAt = params.modified_at || new Date().toUTCString();
    this.createdBy = params.created_by || "0";
    this.unleashPathId = params.id_unleash_path;
    this.unleashNodeId = params.id_unleash_node;
  }
}

Content.schema = joi.compile(joi.object().keys({
  type: joi.string(),
  author: joi.any(),
  link: joi.string(),
  public: joi.boolean(),
  published: joi.boolean(),
  upvotes: joi.number(),
  createdAt: joi.string(),
  modifiedAt: joi.string(),
  createdBy: joi.string(),
}));

module.exports = Content;
