const joi = require('joi');

class Base {
  constructor() {
    this.validate = (schema) => {
      const result = joi.validate(this, schema || this.constructor.schema, {
        stripUnknown: true,
      });
      if (result.error) throw result.error;
      return result.value;
    };
  }
}

module.exports = { Base };
