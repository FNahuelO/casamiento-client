import React, { useState } from "react";
import Liston from "../../style/assets/Liston";
import { Container, SideVector } from "../../style/Container";
import Regalo from "../Carousel/Regalo";
import Modal from "../modal/Regalo";
/* import Flor1 from "../../style/assets/Flor1";
import Flor2 from "../../style/assets/Flor2"; */
import Flor3 from "../../style/assets/Flor3";

export default function FivePage() {
  const [view, setView] = useState(false);
  return (
    <Container
      height="100vh"
      bgColor="#4A6360"
      radius="1rem"
      justify="center"
      align="center"
      flex="column"
      gap="2rem"
      position="relative"
      overflow="hidden"
    >
      <>
        <SideVector left="-2rem" top="0" direction="left">
          <Flor3 width="150" height="100" />
        </SideVector>
        <SideVector right="0" top="0" transform="scaleX(-1) translateX(-2rem)">
          <Flor3 width="150" height="100" />
        </SideVector>
      </>
      <>
        <SideVector
          left="-2rem"
          bottom="0"
          direction="left"
          transform="scaleY(-1)"
        >
          <Flor3 width="150" height="100" />
        </SideVector>
        <SideVector
          right="0"
          bottom="0"
          transform="scaleY(-1) scaleX(-1) translateX(-2rem)"
        >
          <Flor3 width="150" height="100" />
        </SideVector>
      </>
      {/*  
        <SideVector right="0" top="0">
          <Flor1 width="150" height="100" />
        </SideVector> */}

      <Liston text="Regalos" size="2.5rem" />
      <Regalo change={setView} />
      {view && <Modal change={setView} />}
    </Container>
  );
}
