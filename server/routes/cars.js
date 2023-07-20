// routes/cars.js
const express = require('express');
const router = express.Router();
const Car = require('../models/car');

// Create a new car
router.post('/', async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json(car);
  } catch (err) {
    res.status(400).json({ message: 'Error creating car', error: err });
  }
});

// Get all cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: 'Error getting cars', error: err });
  }
});

// Get a car by ID
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: 'Error getting car', error: err });
  }
});

// Update a car by ID
router.put('/:id', async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (err) {
    res.status(400).json({ message: 'Error updating car', error: err });
  }
});

// Delete a car by ID
router.delete('/:id', async (req, res) => {
  try {
    const car = await Car.findByIdAndRemove(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json({ message: 'Car deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting car', error: err });
  }
});

module.exports = router;

