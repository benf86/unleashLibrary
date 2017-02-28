const authorizationKeys = require('./authorizationKeysDev');

module.exports = {
  db: {
    client: 'sqlite3',
    connection: {
      filename: './mydb.sqlite',
    },
    migrations: {
      directory: './data/migrations',
    },
  },
  externalAPIs: {
    userProfiles: 'http://localhost:3000/profiles',
  },
  authorizationKeys,
};
