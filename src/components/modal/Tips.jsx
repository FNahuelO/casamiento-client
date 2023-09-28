import React from "react";
import X from "../../style/assets/X";
import "animate.css";
import { ButtonClose } from "../../style/Buttons";
import { Container } from "../../style/Container";
import { MainModal } from "../../style/Main";
import { Text } from "../../style/Text";

export default function Tips({ change }) {
  const textos = [
    "La vestimenta será elegante sport.",
    "La comida y bebida serán autoservicio.",
    "No alimentar a los perrhijos.",
    "No asistir de vestido blanco.",
  ];
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
        height="50%"
        width="80%"
        bg="white"
        radius=".5rem"
        flex="column"
        position="relative"
        justify="flex-start"
        gap="1.5rem"
        padding="2rem 1rem"
      >
        <Text Tcolor="#4A6360BF" family="BalooFont" size="2rem">
          Tips y Nota
        </Text>
        <Container flex="column" gap="1rem" justify="center" align="flex-start">
          {textos.map((text, idx) => (
            <Container key={idx} gap="1rem" align="center" textAlign="start">
              <Text size="2rem">•</Text>
              <Text family="AlegreyaFont" size="1.2rem">
                {text}
              </Text>
            </Container>
          ))}
        </Container>
      </Container>
    </MainModal>
  );
}
