// app.js
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.js');
const trainRoutes = require('./routes/train.js');
const bookingRoutes = require('./routes/booking.js');

// Initialize environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/trains', trainRoutes);
app.use('/api/bookings', bookingRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
