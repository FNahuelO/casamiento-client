import React from "react";
import Vector from "../../style/assets/Bebida";
import { Container } from "../../style/Container";
import { Text } from "../../style/Text";
import { Button } from "../../style/Buttons";
import { useDataStore } from "../../helpers/context";

export default function Bebida({ change, error }) {
  const { datos } = useDataStore();
  const isDisabled = datos?.invitado?.assist;

  const handleClick = () => {
    if (!isDisabled) {
      error({ view: true, msg: "Debes confirmar la asistencia" });
    } else {
      change({ state: true, type: "drink" });
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
      id="drinks"
    >
      <Text color="#4A6360BF" family="BalooFont" size="2rem">
        Bebidas
      </Text>
      <Vector width="100" height="100" color="#4A6360" />
      <Text size="1.2rem" family="AlegreyaFont" color="#4A6360C7">
        ¿Elige la bebida que mas te gusta?
      </Text>
      <Button
        id="bebida"
        shadow="0px 4px 4px #00000040"
        color="#4A6360BF"
        border="none"
        padding=".5rem 1rem"
        radius="3rem"
        width="65%"
        size="1rem"
        weight="700"
        onClick={() => handleClick()}
      >
        ELEGIR BEBIDA
      </Button>
    </Container>
  );
}
