import React from "react";
import Vector from "../../style/assets/Musica";
import { Container } from "../../style/Container";
import { Text } from "../../style/Text";
import { Button } from "../../style/Buttons";
import { useDataStore } from "../../helpers/context";

export default function Musica({ change, error }) {
  const { datos } = useDataStore();
  const isDisabled = datos?.invitado?.assist;

  const handleClick = () => {
    if (!isDisabled) {
      error({ view: true, msg: "Debes confirmar la asistencia" });
    } else {
      change({ state: true, type: "music" });
    }
  };

  return (
    <Container
      width="80%"
      height="25rem"
      bg="#fff"
      border="1px solid #ddd"
      radius="1rem"
      padding="1rem"
      flex="column"
      justify="center"
      align="center"
      gap="2rem"
    >
      <Text color="#4A6360BF" family="BalooFont" size="2rem">
        Música
      </Text>
      <Vector width="100" />
      <Text size="1.2rem" family="AlegreyaFont" color="#4A6360C7">
        ¿Cual es la canción que no debe faltar en la PlayList de la fiesta?
      </Text>
      <Button
        shadow="0px 4px 4px #00000040"
        color="#4A6360BF"
        border="none"
        padding=".5rem 1rem"
        radius="3rem"
        size="1rem"
        weight="700"
        onClick={() => handleClick()}
      >
        SUGERIR CANCIÓN
      </Button>
    </Container>
  );
}
