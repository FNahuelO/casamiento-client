import React, { useState, useCallback } from "react";
import { MoonLoader } from "react-spinners";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import MapMarkers from "./Marker";
import { Container } from "../style/Container";

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
          <Container
            width="80%"
            height="70%"
            align="center"
            justify="center"
            padding="1rem"
            bg="white"
            radius="1rem"
          >
            <div
              id="container"
              ref={mapRef}
              style={{ height: "100%", width: "100%" }}
            >
              <MapMarkers />
            </div>
          </Container>
        ) : (
          <MoonLoader />
        )}
      </React.StrictMode>
    </GoogleMapsProvider>
  );
};

export default Mapa;
