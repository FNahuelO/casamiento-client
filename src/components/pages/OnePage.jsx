import React from "react";
import { Container, SideVector } from "../../style/Container";
import { Text, HR } from "../../style/Text";
import picture from "../../style/assets/fondo.jpg";
import Comillas from "../../style/assets/Comillas";
import Flor1 from "../../style/assets/Flor1";
import Flor2 from "../../style/assets/Flor2";

export default function OnePage() {
  return (
    <Container
      bgImg={picture}
      bgAttachment="fixed"
      width="100%"
      justify="center"
      height="100vh"
      bgSize="cover"
      bgRepeat="no-repeat"
      positionX="40%"
      overflow="hidden"
      position="relative"
      className="bg"
    >
      <>
        <SideVector left="-2rem" bottom="1rem" direction="left">
          <Flor1 width="150" height="100" />
        </SideVector>
        <SideVector right="0" top="0" transform="translateX(2rem)">
          <Flor2 width="150" height="100" />
        </SideVector>
      </>
      <Container
        width="100%"
        height="100%"
        flex="column"
        justify="center"
        align="center"
        className="bg-child"
        style={{ backgroundColor: "rgba(90, 59, 21, 0.4)" }}
      >
        <Container flex="column" width="80%" gap="4rem">
          <Container flex="column" justify="center" align="center" gap="2rem">
            <Container width="100%" align="center" justify="space-around">
              <HR margin="0" border="1px solid white" width="20%" />
              <Text color="white" size="1.5rem" family="QuattroFont">
                18 . 11 . 2023
              </Text>
              <HR margin="0" border="1px solid white" width="20%" />
            </Container>
            <Container gap="1rem" color="white" align="center">
              <Text size="4rem" color="white" family="MontezFont, sans-serif">
                Cris
              </Text>
              <Text
                display="flex"
                alignItems="center"
                justify="center"
                size="4rem"
                color="white"
                bg="#D28A58"
                radius="50%"
                width="4rem"
                height="4rem"
                family="UpdockFont"
              >
                &
              </Text>
              <Text size="4rem" color="white" family="MontezFont, sans-serif">
                Flor
              </Text>
            </Container>
            <HR margin="0" border="1px solid white" width="100%" />
          </Container>
          <Container flex="column" align="center" justify="center" gap="1.5rem">
            <Comillas />
            <Text
              size="1.8rem"
              weight="700"
              color="white"
              family="DancingFont"
              transform="scale(1.2)"
            >
              Continuando este viaje de amor infinito ...
            </Text>
            <Comillas />
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
