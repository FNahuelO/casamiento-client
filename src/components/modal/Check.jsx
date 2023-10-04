import React from "react";
import check from "../../style/assets/check.svg";
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
      <img src={check} style={{ width: "12rem" }} />
      <Text size="1.5rem" color="#4A6360">
        ¡Guardado con exito!
      </Text>
    </Container>
  );
}
