
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
});

pool.connect((err) => {
  if (err) {
    console.error('Failed to connect to the database:', err.stack);
  } else {
    console.log('Connected to the PostgreSQL database');
  }
});

module.exports = pool;


