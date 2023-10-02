import { useGoogleMap } from "@ubilabs/google-maps-react-hooks";
import { useState, useEffect } from "react";

const MapMarkers = () => {
  const map = useGoogleMap();
  const [, setMarkers] = useState([]);

  // Función de manejo de errores personalizada
  const handleError = (error) => {
    // Aquí puedes realizar acciones específicas cuando se produce un error
    console.error("Error:", error);
    // Puedes mostrar un mensaje de error al usuario si es necesario
    // o realizar otras acciones de recuperación.
  };

  useEffect(() => {
    if (!map) {
      return;
    }

    const markerOptions = {
      map,
      position: { lat: -34.49755, lng: -58.772539 },
      title: "Quinta",
      clickable: false,
    };

    const marker = new window.google.maps.Marker(markerOptions);

    // Agregar el marcador a la lista de marcadores
    setMarkers((prevMarkers) => [...prevMarkers, marker]);

    // Lidiar con errores
    marker.addListener("click", () => {
      try {
        // Coloca aquí el código que podría generar un error
      } catch (error) {
        // Llama a la función de manejo de errores personalizada
        handleError(error);
      }
    });

    // Limpieza de marcadores
    return () => {
      marker.setMap(null);
    };
  }, [map]);

  return null;
};

export default MapMarkers;
