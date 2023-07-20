// client/src/components/CarDetails.js
import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const CarDetails = ({ car, onDelete }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {car.make}
        </Typography>
        <Typography variant="body1">Model: {car.model}</Typography>
        <Typography variant="body1">Year: {car.year}</Typography>
        <Typography variant="body1">Price: ${car.price}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary">Edit</Button>
        <Button color="error" onClick={() => onDelete(car._id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CarDetails;

