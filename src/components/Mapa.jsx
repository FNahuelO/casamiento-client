import React, { useState, useCallback, useEffect } from "react";
import {
  GoogleMapsProvider,
  useGoogleMap,
} from "@ubilabs/google-maps-react-hooks";

const mapOptions = {
  zoom: 17,
  center: { lat: -34.497586, lng: -58.772302 },
};

const MapMarkers = () => {
  // Get the global map instance with the useGoogleMap hook
  const map = useGoogleMap();

  const [, setMarkers] = useState([]);

  // Add markers to the map
  useEffect(() => {
    if (!map) {
      return () => {};
    }

    const initialBounds = new window.google.maps.LatLngBounds();

    const markerOptions = {
      map,
      position: { lat: -34.49755, lng: -58.772539 },
      title: "Quinta",
      clickable: false,
    };

    initialBounds.extend({ lat: -34.49755, lng: -58.772539 });
    const markers = new window.google.maps.Marker(markerOptions);

    // Set the center of the map to fit markers
    map.setCenter(initialBounds.getCenter());

    setMarkers(markers);

    // Clean up markers
    return () => {
      markers.setMap(null);
    };
  }, [map]);

  return null;
};

const Mapa = () => {
  const [loading, setLoading] = useState(true);
  const [mapContainer, setMapContainer] = useState(null);

  const mapRef = useCallback((node) => {
    node && setMapContainer(node);
  }, []);

  return (
    <GoogleMapsProvider
      googleMapsAPIKey="AIzaSyDeMnNMQjy5nc9jMYT04evh28gCB_E0A_g"
      mapContainer={mapContainer}
      mapOptions={mapOptions}
      onLoadScript={() => {
        setLoading(false);
        setTimeout(() => setLoading(true), 1500);
      }}
    >
      <React.StrictMode>
        {loading ? (
          <div
            id="container"
            ref={mapRef}
            style={{ height: "80%", width: "95%" }}
          >
            <MapMarkers />
          </div>
        ) : (
          <h1>LOADING</h1>
        )}
      </React.StrictMode>
    </GoogleMapsProvider>
  );
};

export default Mapa;
