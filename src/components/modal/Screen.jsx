import React from "react";
import { Container } from "../../style/Container";
import { Button } from "../../style/Buttons";
import Map from "../Mapa";
import Confirm from "./Confirm";
import Check from "./Check";
import X from "../../style/assets/X";
import Bebidas from "./Bebidas";
import Tips from "./Tips";
import Playlist from "./Playlist";

export default function Screen({ state, change, datos }) {
  const components = {
    map: <Map />,
    modal: <Confirm />,
    confirm: <Check text={state?.text} />,
    drink: <Bebidas change={change} bebidas={datos} />,
    tips: <Tips change={change} />,
    music: <Playlist change={change} />,
  };
  return (
    <Container
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100vh"
      bg="#4A6360"
      flex="column"
      justify="center"
      align="center"
      index="5"
    >
      <Button
        position="absolute"
        bg="none"
        border="none"
        top="1rem"
        right=".5rem"
        className="close"
        onClick={() => {
          change({ view: false });
        }}
      >
        <X width="1.75rem" height="1.75rem" color="white" />
      </Button>
      {components[state?.type]}
    </Container>
  );
}
