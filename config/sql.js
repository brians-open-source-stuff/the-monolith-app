const { createPool } = require("mysql2/promise");

module.exports = (function() {
  return createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    namedPlaceholders: true,
    connectionLimit: 10
  });
})();
