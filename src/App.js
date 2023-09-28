import "./App.css";
import React, { useState, useEffect } from "react";
import OnePage from "./components/pages/OnePage";
import TwoPage from "./components/pages/TwoPage";
import Five from "./components/pages/Five";
import ThreePage from "./components/pages/ThreePage";
import FourPage from "./components/pages/FourPage";
import Screen from "./components/modal/Screen";
import { useDataStore } from "./helpers/context";
import ErrorModal from "./components/modal/Error";
import { FixedButton } from "./style/Buttons";
import Send from "./components/modal/Send";
import { SideVector } from "./style/Container";
import Flor1 from "./style/assets/Flor1";
import Flor2 from "./style/assets/Flor2";

function App() {
  const [view, setView] = useState({ view: false });
  const [error, setError] = useState(false);
  const { datos } = useDataStore();
  const [confirm, setConfirm] = useState(false);
  const [showVector, setShowVector] = useState(true);
  const [style, setStyle] = useState({
    width: "2rem",
    right: "1rem",
    height: "4rem",
    radius: "50%",
    opacity: "0.5",
  });

  useEffect(() => {
    // Después de 3 segundos, oculta el elemento
    const timeoutId = setTimeout(() => {
      setShowVector(false);
    }, 4000); // Cambia 3000 a la cantidad de tiempo en milisegundos que desees

    // Limpia el timeout cuando el componente se desmonta
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (datos?.invitado?.assist === "false") {
      setStyle({ ...style, opacity: "1" });
    } else if (Object.keys(datos).length === 3) {
      setStyle({ ...style, opacity: "1" });
    }
  }, [datos]);

  const handleClick = () => {
    // Verifica si no se ha confirmado la asistencia
    if (!datos?.invitado?.assist) {
      setError({ view: true, msg: "Debes confirmar la asistencia." });
      return;
    }

    if (datos?.invitado?.assist === "false") {
      setConfirm(true);
      return;
    }

    // Verifica si no se han seleccionado bebidas ni música
    if (!datos?.bebidas && !datos?.musica) {
      setError({
        view: true,
        msg: "Debes seleccionar bebidas y música antes de enviar.",
      });
      return;
    }

    // Verifica si no se han seleccionado bebidas
    if (!datos?.bebidas) {
      setError({
        view: true,
        msg: "Debes seleccionar las bebidas antes de enviar.",
      });
      return;
    }

    // Verifica si no se ha seleccionado música
    if (!datos?.musica) {
      setError({
        view: true,
        msg: "Debes seleccionar la música antes de enviar.",
      });
      return;
    }

    // Si todas las validaciones pasan, establece la confirmación como verdadera
    setConfirm(true);
  };

  return (
    <React.Fragment>
      {showVector && (
        <>
          <SideVector left="0" bottom="0" direction="left">
            <Flor1 width="150" height="100" />
          </SideVector>
          <SideVector right="0" top="0">
            <Flor2 width="150" height="100" />
          </SideVector>
        </>
      )}
      <OnePage />
      <TwoPage change={setView} error={setError} />

      <ThreePage error={setError} />

      <Five />
      <FourPage />
      <hr
        style={{
          margin: 0,
          border: ".5rem solid #D28A58",
        }}
      />
      <FixedButton
        position="fixed"
        bottom="3rem"
        bg="#c56a2a"
        padding="1rem 2rem"
        {...style}
        onClick={() => handleClick()}
      >
        Enviar
      </FixedButton>

      {view.view && <Screen state={view} change={setView} />}
      {confirm && <Send datos={datos} close={setConfirm} />}
      {error.view && <ErrorModal close={setError} error={error} />}
    </React.Fragment>
  );
}

export default App;
