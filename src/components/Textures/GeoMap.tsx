"use client";

import { requestGeoLocation, waitPromisable } from "@/util";
import "leaflet-defaulticon-compatibility";
import { useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, Polyline } from "react-leaflet";

type Props = {
  className?: string;
}

const myPosition = [-6.905977, 107.613144] as [number, number];

export default function GeoMap({ className }: Props) {
  const [yourPosition, setYourPosition] = useState(null as [number, number] | null);

  const center = useMemo(() => {
    if (!yourPosition) return myPosition;
    console.log("happenr");
    return myPosition.map((x, ) => x / 2) as [number, number];
  }, [yourPosition]);

  useEffect(() => {
    const fetchData = async () => {
      const [, data] = await waitPromisable(requestGeoLocation());
      if (data) setYourPosition([data.coords.latitude, data.coords.longitude]);
    }
    fetchData();
  }, []);

  return <MapContainer
    className={className}
    center={center}
    zoom={10}
    scrollWheelZoom={true}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {yourPosition && <>
      <Polyline positions={[myPosition, yourPosition]} dashArray="1 10">
        <Popup>
          Distance between you and me!
        </Popup>
      </Polyline>
      <Marker position={yourPosition}>
        <Popup>
          Youre Here!
        </Popup>
      </Marker>
    </>}
    <Marker position={myPosition}>
      <Popup>
        Im Here!
      </Popup>
    </Marker>
  </MapContainer>
    ;
}
