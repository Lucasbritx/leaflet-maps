import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import { renderToString } from "react-dom/server";

const CustomMarkerIcon = L.divIcon({
  className: "custom-marker-icon",
  html: `<div style="font-size: 24px; color: red;">${renderToString(
    <FaMapMarkerAlt />
  )}</div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

export default function Map() {
  return (
    <MapContainer center={[-23.55052, -46.633308]} zoom={13} className="w-full h-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-23.55052, -46.633308]} icon={CustomMarkerIcon}>
        <Popup>Testing react-icons inside leaflet</Popup>
      </Marker>
    </MapContainer>
  );
}