const pool = require('../db.js');

// Book a seat
exports.bookSeat = async (req, res) => {
  const { userId } = req.user; // Extract from token
  const { trainId, seats } = req.body;

  try {
    await pool.query('BEGIN');

    const trainResult = await pool.query('SELECT * FROM trains WHERE id = $1 FOR UPDATE', [trainId]);
    const train = trainResult.rows[0];

    if (train.available_seats < seats) {
      await pool.query('ROLLBACK');
      return res.status(400).json({ error: 'Not enough seats available' });
    }

    await pool.query('UPDATE trains SET available_seats = available_seats - $1 WHERE id = $2', [
      seats,
      trainId,
    ]);

    const bookingResult = await pool.query(
      'INSERT INTO bookings (user_id, train_id, seats_booked) VALUES ($1, $2, $3) RETURNING *',
      [userId, trainId, seats]
    );

    await pool.query('COMMIT');
    res.json({ booking: bookingResult.rows[0] });
  } catch (error) {
    await pool.query('ROLLBACK');
    res.status(500).json({ error: 'Booking failed' });
  }
};
