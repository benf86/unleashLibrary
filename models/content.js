'use strict';

const { BaseModel } = require('./base');


class ContentModel extends BaseModel {
  constructor (params) {
    this.id = params.id;
    this.type = params.type;
    this.author = params.author;
    this.link = params.link;
    this.public = params.public;
    this.published = params.published;
    this.upvotes = params.upvotes;
    this.createdAt = params.created_at;
    this.modifiedAt = params.modified_at;
    this.createdBy = params.created_by;
    this.unleashPathId = params.id_unleash_path;
    this.unleashNodeId = params.id_unleash_node;
  }
}

export default ContentModel;
export {
  ContentModel
};