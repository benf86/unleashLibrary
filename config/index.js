module.exports = {
  infrastructure: {
    port: 3000
  },
  db: {
    client: 'sqlite3',
    connection: {
      filename: "./mydb.sqlite"
    }
  },
}