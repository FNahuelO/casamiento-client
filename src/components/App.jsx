import "../App.css";
import React, { useState, useEffect } from "react";
import OnePage from "./pages/OnePage";
import TwoPage from "./pages/TwoPage";
import Five from "./pages/Five";
import ThreePage from "./pages/ThreePage";
import FourPage from "./pages/FourPage";
import Screen from "./modal/Screen";
import { useDataStore } from "../helpers/context";
import ErrorModal from "./modal/Error";
import { FixedButton } from "../style/Buttons";
import Send from "./modal/Send";

function App() {
  const [view, setView] = useState({ view: false });
  const [error, setError] = useState(false);
  const { datos } = useDataStore();
  const [confirm, setConfirm] = useState(false);
  const [style, setStyle] = useState({
    width: "2rem",
    right: "1rem",
    height: "4rem",
    radius: "50%",
    opacity: "0.5",
  });

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
