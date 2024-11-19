import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import the marker images
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerIconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

const LeafletMapComponent = () => {
  const [coordinates, setCoordinates] = useState([13.037834, 80.222992]); // Initial coordinates

  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView(coordinates, 13); // Use state coordinates

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // Create a custom icon
    const customIcon = L.icon({
      iconUrl: markerIconUrl,
      iconRetinaUrl: markerIconRetinaUrl,
      shadowUrl: markerShadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    // Add a marker with the custom icon
    const marker = L.marker(coordinates, { icon: customIcon }).addTo(map)
      .bindPopup('Location: Victory Group of Institutions')
      .openPopup();

    // Cleanup on component unmount
    return () => {
      map.remove();
    };
  }, [coordinates]); // Re-run effect when coordinates change

  return (
    <div>
      <div className='mt-2' id="map" style={{ height: '300px', width: '100%' }}></div>
    </div>
  );
};

export default LeafletMapComponent;