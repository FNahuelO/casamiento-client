import React from "react";
import Vector from "../../style/assets/Vector";
import { Container } from "../../style/Container";
import { Text } from "../../style/Text";
import { Button } from "../../style/Buttons";

export default function Tips({ change }) {
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
        Tips y Nota
      </Text>
      <Vector width="100" />
      <Text size="1.2rem" family="AlegreyaFont" color="#4A6360C7">
        Información adicional para tener en cuenta
      </Text>
      <Button
        shadow="0px 4px 4px #00000040"
        color="#4A6360BF"
        border="none"
        padding=".5rem 1rem"
        radius="3rem"
        width="65%"
        size="1rem"
        weight="700"
        onClick={() => change({ state: true, type: "tips" })}
      >
        + INFO
      </Button>
    </Container>
  );
}
