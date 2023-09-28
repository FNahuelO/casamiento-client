import React from "react";
import Vector from "../../style/assets/Gift";
import { Container } from "../../style/Container";
import { Text } from "../../style/Text";
import { Button } from "../../style/Buttons";

export default function Regalo({ change }) {
  return (
    <Container
      width="80%"
      height="25rem"
      bg="#fff"
      border="1px solid #ddd"
      radius="1rem"
      padding="1rem"
      flex="column"
      justify="space-evenly"
      align="center"
    >
      <Text size="1.5rem" family="DancingFont" color="#4A6360C7" weight="700">
        Queremos brindarle una gran noche y con su colaboración nos ayudarian a
        hacerlo posible
      </Text>
      <Vector width="90" height="90" color="#4A6360" />
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
        onClick={() => change(true)}
      >
        VER MÁS
      </Button>
    </Container>
  );
}
