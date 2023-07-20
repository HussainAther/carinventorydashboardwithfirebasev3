// src/components/CarList.js
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { serverCalls } from '../api';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const data = await serverCalls.get();
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  // Rest of the code remains the same...
  // Replace the columns and other parts of the DataGrid as per your requirement.

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={cars}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </div>
  );
};

export default CarList;

