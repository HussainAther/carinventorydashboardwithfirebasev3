// src/components/CarList.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const CarList = ({ cars, onUpdate, onDelete }) => {
  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'make', headerName: 'Make', width: 150 },
    { field: 'model', headerName: 'Model', width: 150 },
    { field: 'year', headerName: 'Year', width: 100 },
    { field: 'price', headerName: 'Price', width: 150 },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 120,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="primary"
          onClick={() =>
            onUpdate(params.row._id, {
              make: 'Updated Make',
              model: 'Updated Model',
              year: 2023,
              price: 30000,
            })
          }
        >
          Edit
        </Button>
      ),
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 120,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="error"
          onClick={() => onDelete(params.row._id)}
        >
          Delete
        </Button>
      ),
    },
  ];

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

