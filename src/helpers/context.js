import React, { createContext, useContext, useState } from "react";

// Crea un contexto para el almacenamiento de datos
const DataStoreContext = createContext();

export function DataStoreProvider({ children }) {
  const [datos, setDatos] = useState({});

  const agregarDato = (dato, key) => {
    setDatos({ ...datos, [key]: dato });
  };

  const eliminarDato = (key) => {
    const nuevosDatos = { ...datos };
    delete nuevosDatos[key];
    setDatos(nuevosDatos);
  };
  const allDelete = () => {
    setDatos({});
  };

  return (
    <DataStoreContext.Provider
      value={{ datos, agregarDato, eliminarDato, allDelete }}
    >
      {children}
    </DataStoreContext.Provider>
  );
}

// Hook personalizado para acceder al almacenamiento
export function useDataStore() {
  return useContext(DataStoreContext);
}
