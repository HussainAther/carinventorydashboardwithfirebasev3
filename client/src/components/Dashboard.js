// src/components/Dashboard.js
import React from 'react';
import CarList from './CarList';
import CarMap from './CarMap';

const Dashboard = () => {
  // Assuming you have a 'cars' array containing car objects with latitude and longitude properties
  const cars = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2021, latitude: 51.505, longitude: -0.09 },
    { id: 1, make: 'Nissan', model: 'Altima', year: 2018, latitude: 51.505, longitude: -0.09 }
  ];

  return (
    <div>
      <h1>Car Inventory Dashboard</h1>
      <CarList cars={cars} />
      <CarMap cars={cars} />
    </div>
  );
};

export default Dashboard;

