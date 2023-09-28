import React, { useState } from "react";
import Liston from "../../style/assets/Liston";
import { Container } from "../../style/Container";
import Regalo from "../Carousel/Regalo";
import Modal from "../modal/Regalo";

export default function FivePage() {
  const [view, setView] = useState(false);
  return (
    <Container
      height="90vh"
      bgColor="#FFDFB9"
      radius="1rem"
      justify="center"
      align="center"
      flex="column"
      gap="2rem"
    >
      <Liston text="Regalos" size="2.5rem" />
      <Regalo change={setView} />
      {view && <Modal change={setView} />}
    </Container>
  );
}
