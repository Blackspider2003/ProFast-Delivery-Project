import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// 🔄 Fly-to logic using useMap
const MapFlyToDistrict = ({ targetDistrict }) => {
  const map = useMap();

  React.useEffect(() => {
    if (targetDistrict) {
      map.flyTo([targetDistrict.latitude, targetDistrict.longitude], 12, {
        duration: 1.5,
      });
    }
  }, [targetDistrict, map]);

  return null;
};

const Coverage = () => {
  const allDistricts = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [targetDistrict, setTargetDistrict] = useState(null);

  const handleGoClick = () => {
    const found = allDistricts.find(
      (item) => item.district.toLowerCase() === searchTerm.toLowerCase()
    );
    if (found) {
      setTargetDistrict(found);
    } else {
      alert("District not found!");
    }
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">
        We are available in 64 Districts
      </h2>

      {/* Search + Go */}
      <div className="mb-6 flex justify-center gap-2">
        <input
          type="text"
          placeholder="Search district..."
          className="input input-bordered w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleGoClick} className="btn btn-primary">
          Go
        </button>
      </div>

      {/* Map */}
      <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={8}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* This only flies to district — doesn't change marker visibility */}
          <MapFlyToDistrict targetDistrict={targetDistrict} />

          {/* Show all district markers always */}
          {allDistricts.map((district, index) => (
            <Marker
              key={index}
              position={[district.latitude, district.longitude]}
            >
              <Popup>
                <strong>{district.district}</strong>
                <br />
                {district.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
