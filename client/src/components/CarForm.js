// src/components/CarForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';

const CarForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Add New Car
        </Typography>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <TextField label="Make" {...register('make')} fullWidth margin="normal" />
          <TextField label="Model" {...register('model')} fullWidth margin="normal" />
          <TextField label="Year" type="number" {...register('year')} fullWidth margin="normal" />
          <TextField
            label="Price"
            type="number"
            {...register('price')}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CarForm;

