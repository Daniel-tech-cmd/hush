"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Set the default icon (Leaflet uses default icons that may not load correctly without this configuration)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapEmbed = ({ location }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [mapKey, setMapKey] = useState(0); // Unique key to re-render map only when needed

  useEffect(() => {
    // Fetch coordinates for the location using OpenStreetMap Nominatim API
    if (location) {
      fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          location
        )}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            const { lat, lon } = data[0];
            setCoordinates([parseFloat(lat), parseFloat(lon)]);
            setMapKey((prevKey) => prevKey + 1); // Update key to reinitialize map
          } else {
            console.error("Location not found");
          }
        })
        .catch((error) => console.error("Error fetching coordinates:", error));
    }
  }, [location]);

  return (
    <div className="my-16 px-6 lg:px-12">
      {coordinates ? (
        <MapContainer
          key={mapKey} // Use unique key to prevent reinitialization
          center={coordinates}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
          className="rounded-lg shadow-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={coordinates}>
            <Popup>{location}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default MapEmbed;
