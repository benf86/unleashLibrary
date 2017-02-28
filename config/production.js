module.exports = {
  db: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    },
  },
  externalAPIs: {
    userProfiles: 'https://txkaf3ohhf.execute-api.us-west-2.amazonaws.com/prod/profiles',
  },
};
