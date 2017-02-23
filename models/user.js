const { Base } = require('./base');

class User extends Base {
  constructor(params) {
    super();
    this.id = params.id;
    this.role = params.role;
    this.idUnleasher = params.id_unleasher;
    this.createdAt = params.created_at;
    this.modifiedAt = params.modified_at;
    this.createdBy = params.created_by;
  }
}

export default User;
export {
  User,
};
