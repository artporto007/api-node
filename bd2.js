async function connect() {
  if (global.connection) return global.connection.connect();

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: process.env.URL_BD,
  });

  global.connection = pool;
  return pool.connect();
}

async function selectUsuarios() {
  const client = await connect();
  const res = await client.query("SELECT * FROM usuario");
  return res.rows;
}

module.exports = {
  selectUsuarios,
};
