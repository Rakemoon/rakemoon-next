"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type Props = {
  className?: string;
}

export default function GeoMap({ className }: Props) {
  const position = [-6.905977, 107.613144] as [number, number];

  return (
    <MapContainer
      className={className}
      center={position}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Im Here!
        </Popup>
      </Marker>
    </MapContainer>
  );
}
