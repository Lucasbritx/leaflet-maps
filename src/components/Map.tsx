import { createElement, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import IconPicker from "react-icons-picker";
import { renderToString } from "react-dom/server";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const [selectedIcon, setSelectedIcon] = useState("FaUsers");

  const CustomMarkerIcon = L.divIcon({
    className: "custom-marker-icon",
    html: `<div style="font-size: 24px; color: red;">${renderToString(
      createElement(require("react-icons/fa")[selectedIcon])
    )}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  return (
    <div className="flex flex-col items-center">
      <IconPicker value={selectedIcon} onChange={setSelectedIcon} />
      <MapContainer center={[-23.55052, -46.633308]} zoom={13} className="w-full h-96">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[-23.55052, -46.633308]} icon={CustomMarkerIcon}>
          <Popup>Dynamic icon!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}