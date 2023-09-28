import React from "react";
import { Container } from "../../style/Container";
import { Text, HR } from "../../style/Text";
import picture from "../../style/assets/backgraound-1.png";
import Comillas from "../../style/assets/Comillas";

export default function OnePage() {
  return (
    <Container
      bgImg={picture}
      bgAttachment="fixed"
      positionX="70%"
      width="100%"
      height="100vh"
      bgSize="cover"
    >
      <Container
        width="100%"
        height="100%"
        flex="column"
        justify="center"
        align="center"
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
