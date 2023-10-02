import React, { useState, useCallback } from "react";
import { MoonLoader } from "react-spinners";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import MapMarkers from "./Marker";

const mapOptions = {
  zoom: 17,
  center: { lat: -34.497586, lng: -58.772302 },
};

const API_KEY = process.env.REACT_APP_MAPS_KEY;

const Mapa = () => {
  const [loading, setLoading] = useState(true);
  const [mapContainer, setMapContainer] = useState(null);

  const mapRef = useCallback((node) => {
    node && setMapContainer(node);
  }, []);

  return (
    <GoogleMapsProvider
      googleMapsAPIKey={API_KEY}
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
          <MoonLoader />
        )}
      </React.StrictMode>
    </GoogleMapsProvider>
  );
};

export default Mapa;
