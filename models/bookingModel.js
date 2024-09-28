
const pool = require('../db.js');

// Create a new booking
exports.createBooking = async (userId, trainId, seatsBooked) => {
  const query = `
    INSERT INTO bookings (user_id, train_id, seats_booked)
    VALUES (Rs1, Rs2, Rs3)
    RETURNING *;
  `;
  const values = [userId, trainId, seatsBooked];

  try {
    const result = await pool.query(query, values);
    return result.rows[0]; // Return the created booking
  } catch (err) {
    throw new Error('Error creating booking: ' + err.message);
  }
};

// Get booking by ID
exports.findBookingById = async (id) => {
  const query = 'SELECT * FROM bookings WHERE id = Rs1;';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    return result.rows[0]; // Return the found booking
  } catch (err) {
    throw new Error('Error finding booking: ' + err.message);
  }
};
