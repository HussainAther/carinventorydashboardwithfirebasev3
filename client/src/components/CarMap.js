// src/components/CarMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const CarMap = ({ cars }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {cars.map((car) => (
        <Marker key={car.id} position={[car.latitude, car.longitude]}>
          <Popup>{`${car.make} ${car.model} (${car.year})`}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CarMap;

