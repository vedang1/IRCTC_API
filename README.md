# IRCTC API

## Description
The IRCTC API is a railway management system designed to allow users to check train availability, book seats, and manage train information. Built using Node.js and PostgreSQL, this API provides a robust backend for handling various operations related to railway management.

## Features
- User registration and authentication
- Admin functionalities to manage trains
- Seat availability checking
- Booking management
- JWT-based authentication for secure access

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Variables**: dotenv for managing sensitive configuration

## Installation

### Prerequisites
- Node.js (>=12.x)
- PostgreSQL (>=12.x)
- npm (Node Package Manager)

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/IRCTC_API.git
cd IRCTC_API
Step 2: Install Dependencies
Run the following command to install the required npm packages:

bash
Copy code
npm install
Step 3: Set Up PostgreSQL
Create a PostgreSQL database:

sql
Copy code
CREATE DATABASE irctc_api_db;
Create a user with the necessary privileges:

sql
Copy code
CREATE USER irctc_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE irctc_api_db TO irctc_user;
Create the necessary tables using the following SQL commands:

sql
Copy code
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user'
);

CREATE TABLE trains (
    id SERIAL PRIMARY KEY,
    train_name VARCHAR(255) NOT NULL,
    source VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    total_seats INT NOT NULL,
    available_seats INT NOT NULL
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    train_id INT REFERENCES trains(id),
    seat_number INT NOT NULL
);
Step 4: Configure Environment Variables
Create a .env file in the root directory and add your database connection details and JWT secret:

plaintext
Copy code
DB_USER=
DB_HOST=
DB_NAME=
DB_PASS=
DB_PORT=
DATABASE_URL=
JWT_SECRET=
PORT=
Step 5: Run the Application
Start the server by running:

bash
Copy code
node app.js
The server will start on the specified port (default: 3000).

Step 6: Test the API
You can test the API endpoints using tools like Postman or curl. The base URL will be:

bash
Copy code
http://localhost:3000/api
API Endpoints
User Registration: POST /api/auth/register
User Login: POST /api/auth/login
Add Train: POST /api/trains
Get Seat Availability: GET /api/trains/availability
Book Seat: POST /api/bookings/book
Contributing
Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Inspired by the Indian Railway Catering and Tourism Corporation (IRCTC).
Thanks to the open-source community for their contributions and resources.
