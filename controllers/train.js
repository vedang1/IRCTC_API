const pool = require('../db.js');

// Admin: Add a new train
exports.addTrain = async (req, res) => {
  const { name, source, destination, total_seats } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO trains (name, source, destination, total_seats, available_seats) VALUES (Rs1, Rs2, Rs3, Rs4, Rs4) RETURNING *',
      [name, source, destination, total_seats]
    );
    res.status(201).json({ train: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add train' });
  }
};

// Get seat availability
exports.getSeatAvailability = async (req, res) => {
  const { source, destination } = req.query;

  try {
    const result = await pool.query(
      'SELECT * FROM trains WHERE source = Rs1 AND destination = Rs2',
      [source, destination]
    );
    res.json({ trains: result.rows });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trains' });
  }
};

  
