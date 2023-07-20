// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const carRoutes = require('./routes/cars'); // Import the car routes

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const dbURI = 'mongodb://localhost:27017/car_inventory'; // Update with your MongoDB connection string
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Register the car routes
app.use('/api/cars', carRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

