
const pool = require('../db.js');

// Add a new train
exports.addTrain = async (name, source, destination, totalSeats) => {
  const query = `
    INSERT INTO trains (name, source, destination, total_seats, available_seats)
    VALUES (Rs1, Rs2, Rs3, Rs4, Rs4)
    RETURNING *;
  `;
  const values = [name, source, destination, totalSeats];

  try {
    const result = await pool.query(query, values);
    return result.rows[0]; // Return the added train
  } catch (err) {
    throw new Error('Error adding train: ' + err.message);
  }
};

// Get train availability by source and destination
exports.getTrainsByRoute = async (source, destination) => {
  const query = `
    SELECT * FROM trains
    WHERE source = Rs1 AND destination = Rs2;
  `;
  const values = [source, destination];

  try {
    const result = await pool.query(query, values);
    return result.rows; // Return list of trains
  } catch (err) {
    throw new Error('Error fetching trains: ' + err.message);
  }
};

// Find train by ID
exports.findTrainById = async (id) => {
  const query = 'SELECT * FROM trains WHERE id = Rs1;';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    return result.rows[0]; // Return the found train
  } catch (err) {
    throw new Error('Error finding train: ' + err.message);
  }
};
