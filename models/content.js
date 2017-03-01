const joi = require('joi');
const { Base } = require('./base');


class Content extends Base {
  constructor(params) {
    super();
    this.id = params.id;
    this.type = params.type;
    this.id_author = params.id_author.toString();
    this.link = params.link;
    this.public = !!params.public || false;
    this.published = !!params.published || false;
    this.title = params.title;
    this.upvotes = params.upvotes || 0;
    this.stage = params.stage || 'backlog';
    this.created_at = params.created_at || new Date().toUTCString();
    this.updated_at = params.updated_at || new Date().toUTCString();
    this.created_by = params.created_by || "0";
    this.id_unleash_path = params.id_unleash_path;
    this.id_unleash_node = params.id_unleash_node;
  }

  nextStage (stage) {
    this.stage = stage && Content.stages.indexOf(stage) > -1
      ? stage
      : Content.stages[Content.stages.indexOf(this.stage) + 1]
        || Content.stages[Content.stages.length - 1];
    return this;
  }
}

Content.stages = ['backlog', 'research_in_progress', 'research_done', 'writing_in_progress', 'writing_done', 'proofreading_technical', 'proofreading_linguistic', 'ready_for_publishing', 'published'];

Content.schema = joi.compile(joi.object().keys({
  type: joi.string(),
  id_author: joi.string(),
  link: joi.string(),
  title: joi.string(),
  public: joi.boolean(),
  published: joi.boolean(),
  upvotes: joi.number(),
  stage: joi.string(),
  created_at: joi.string(),
  updated_at: joi.string(),
}));

module.exports = Content;
