import React, { useState, useEffect } from "react";
import { fetchBebidas } from "../../helpers";
import Liston from "../../style/assets/Liston";
import { Container } from "../../style/Container";
import { Text } from "../../style/Text";
import Carousel from "../Carousel/Carousel";
import Bebidas from "../modal/Bebidas";
import Tips from "../modal/Tips";
import Playlist from "../modal/Playlist";

export default function ThreePage({ error }) {
  const [view, setView] = useState({ state: false, type: null });
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    fetchBebidas().then((data) => setDatos(data));
  }, []);

  const components = {
    drink: <Bebidas change={setView} bebidas={datos} />,
    tips: <Tips change={setView} />,
    music: <Playlist change={setView} />,
  };

  return (
    <Container
      height="100vh"
      bgColor="#4A6360"
      transform="translate(0,-2.5rem)"
      radius="2rem"
      justify="center"
      align="center"
      flex="column"
      gap="1rem"
      id="music"
    >
      <Container flex="column" gap=".5rem">
        <Liston text="Fiesta" size="2.5rem" />
        <Text color="white" family="AlegreyaFont">
          AQUI UNOS DETALLES A TENER EN CUENTA
        </Text>
      </Container>
      <Carousel change={setView} error={error} />
      {view.state && components[view?.type]}
    </Container>
  );
}
