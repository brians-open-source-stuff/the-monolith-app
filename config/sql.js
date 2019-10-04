const { createPool } = require("mysql2/promise");

module.exports = (async function() {
  try {
    const pool = createPool({
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      namedPlaceholders: true,
      connectionLimit: 10
    });

    const connection = await pool.getConnection();
    await connection.query("SELECT 1=1");
    pool.releaseConnection(connection);

    return pool;
  } catch (error) {
    console.error(error.stack);
    process.exit(1);
  }
})();
