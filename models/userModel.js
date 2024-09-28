
const pool = require('../db.js');

// Create a new user
exports.createUser = async (email, hashedPassword, role) => {
  const query = `
    INSERT INTO users (email, password, role)
    VALUES (Rs1, Rs2, Rs3)
    RETURNING id, username, role;
  `;
  const values = [email, hashedPassword, role];

  try {
    const result = await pool.query(query, values);
    return result.rows[0]; // Return the created user
  } catch (err) {
    throw new Error('Error creating user: ' + err.message);
  }
};

// Find user by username
exports.findUserByUsername = async (email) => {
  const query = 'SELECT * FROM users WHERE username = Rs1;';
  const values = [email];

  try {
    const result = await pool.query(query, values);
    return result.rows[0]; // Return the found user
  } catch (err) {
    throw new Error('Error finding user by email: ' + err.message);
  }
};

// Find user by ID
exports.findUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = Rs1;';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    return result.rows[0]; // Return the found user
  } catch (err) {
    throw new Error('Error finding user by ID: ' + err.message);
  }
};
