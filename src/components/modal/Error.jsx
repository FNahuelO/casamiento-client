import React from "react";
import PictureError from "../../style/assets/Error";
import X from "../../style/assets/X";
import { ButtonClose } from "../../style/Buttons";
import { Container } from "../../style/Container";
import { MainModal } from "../../style/Main";
import { Title } from "../../style/Text";

export default function ErrorModal({ error, close }) {
  return (
    <MainModal>
      <Container
        position="relative"
        width="80%"
        height="20rem"
        padding="1rem 2rem"
        bg="white"
        flex="column"
        align="center"
        justify="center"
        gap="1rem"
        radius="1rem"
        textAlign="center"
        className="modal"
      >
        <ButtonClose rigth="1rem" onClick={() => close(false)}>
          <X />
        </ButtonClose>
        <PictureError width="250" height="200" />
        <Title size="1.5rem" weight="700">
          {error?.msg}
        </Title>
      </Container>
    </MainModal>
  );
}
