import React from "react";
import Moño from "../../style/assets/Moño";
import { Container } from "../../style/Container";
import { Text } from "../../style/Text";
import { Button } from "../../style/Buttons";

export default function DressCode({ change }) {
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
        Dress Code
      </Text>
      <Moño width="100" />
      <Text size="1.2rem" family="AlegreyaFont" color="#4A6360C7">
        Una orientacion para tu vestuario
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
        onClick={() => change(true)}
      >
        VER MÁS
      </Button>
    </Container>
  );
}
