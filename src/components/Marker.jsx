import { useGoogleMap } from "@ubilabs/google-maps-react-hooks";
import { useState, useEffect } from "react";

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

export default MapMarkers;
