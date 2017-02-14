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
};
