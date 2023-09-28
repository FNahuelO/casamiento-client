import React from "react";
import VectorCheck from "../../style/assets/VectorCheck";
import { Container } from "../../style/Container";
import { Text } from "../../style/Text";

export default function Check() {
  return (
    <Container
      flex="column"
      radius="50%"
      width="20rem"
      height="20rem"
      bg="white"
      justify="center"
      align="center"
      gap="1.5rem"
      className="animate__animated animate__bounceIn"
    >
      <VectorCheck color="#4A6360EB" />
      <Text size="1.5rem" color="#4A6360">
        ¡Guardado con exito!
      </Text>
    </Container>
  );
}
