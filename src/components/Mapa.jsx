import React, { useState, useCallback } from "react";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import MapMarkers from "./Marker";

const mapOptions = {
  zoom: 17,
  center: { lat: -34.497586, lng: -58.772302 },
};

const Mapa = () => {
  const [loading, setLoading] = useState(true);
  const [mapContainer, setMapContainer] = useState(null);

  const mapRef = useCallback((node) => {
    node && setMapContainer(node);
  }, []);

  return (
    <GoogleMapsProvider
      googleMapsAPIKey="AIzaSyBOTDRH4UBts12zl5WD64rzYXSWHTtjHOI"
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
