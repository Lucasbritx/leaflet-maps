import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import IconPicker from "react-icons-picker";
import { renderToString } from "react-dom/server";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import "leaflet/dist/leaflet.css";

const iconLibraries: Record<string, any> = {
  fa: FaIcons,
  md: MdIcons,
  bi: BiIcons,
  ai: AiIcons,
};

export default function MapComponent() {
  const [selectedIcon, setSelectedIcon] = useState("FaMapMarkerAlt");

  const getIconComponent = (iconString: string) => {
    const lib = iconString.slice(0, 2).toLowerCase();
    return iconLibraries[lib]?.[iconString] || null;
  };

  const IconComponent = getIconComponent(selectedIcon);

  const CustomMarkerIcon = L.divIcon({
    className: "custom-marker-icon",
    html: IconComponent
      ? `<div style="font-size: 24px; color: red;">${renderToString(<IconComponent />)}</div>`
      : "",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  return (
    <div className="flex flex-col items-center">
      <IconPicker
        value={selectedIcon}
        onChange={setSelectedIcon}
      />
      <MapContainer center={[-23.55052, -46.633308]} zoom={13} className="w-full h-96">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[-23.55052, -46.633308]} icon={CustomMarkerIcon}>
          <Popup>Dynamic Icon</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}