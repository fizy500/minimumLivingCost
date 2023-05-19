import React from "react";
// --- (1), (2) & (3): install and import ---
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
// --- ---------------------------------- ---
export default function CityMap() {
  return (
    <div className='lg:h-[400px] h-[300px] w-[98%] lg:w-[408px]  rounded-lg shadow-lg  shadow-[rgba(0,0,0,0.25)] bg-white opacity-50'>
      <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[5.038963, -7.90947]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
