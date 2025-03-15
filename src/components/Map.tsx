'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const position: LatLngExpression = [51.505, -0.09];

export default function MapComponent() {
  return (
    <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>A simple popup</Popup>
      </Marker>
    </MapContainer>
  );
}