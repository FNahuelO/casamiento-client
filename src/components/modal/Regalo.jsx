import React from "react";
import X from "../../style/assets/X";
import "animate.css";
import { ButtonClose } from "../../style/Buttons";
import { Container } from "../../style/Container";
import { MainModal } from "../../style/Main";
import { Text } from "../../style/Text";

export default function Regalos({ change }) {
  const textos = ["ALIAS: CristianArin", "CBU: 0000003100020899223672"];
  return (
    <MainModal className="animate__animated animate__fadeIn">
      <ButtonClose
        top="5rem"
        onClick={() => {
          change(false);
        }}
      >
        <X width="25" height="25" color="white" />
      </ButtonClose>
      <Container
        height="40%"
        width="80%"
        bg="white"
        radius=".5rem"
        flex="column"
        position="relative"
        justify="flex-start"
        gap="1.5rem"
        padding="2rem 1rem"
        className="modal"
      >
        <Text Tcolor="#4A6360BF" family="BalooFont" size="2rem">
          Mercado pago
        </Text>
        <Container flex="column" gap="1rem" justify="center" align="flex-start">
          {textos.map((text, idx) => (
            <Container key={idx} gap=".5rem" align="center" textAlign="start">
              <Text size="2rem">•</Text>
              <Text size="1.2rem" weight="700">
                {text.split(":")[0] + ":"}
              </Text>
              <Text size="1.2rem">{text.split(":")[1]}</Text>
            </Container>
          ))}
        </Container>
      </Container>
    </MainModal>
  );
}
