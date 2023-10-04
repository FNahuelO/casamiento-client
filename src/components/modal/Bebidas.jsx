import React, { useState } from "react";
import X from "../../style/assets/X";
import "animate.css";
import { ButtonClose, Button } from "../../style/Buttons";
import { Container } from "../../style/Container";
import { MainModal } from "../../style/Main";
import { Text } from "../../style/Text";
import { useDataStore } from "../../helpers/context";
import check from "../../style/assets/check.svg";
import ButtonCheck from "../../style/assets/ButtonCheck";

export default function Bebidas({ change, bebidas }) {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState([]);
  const { agregarDato } = useDataStore();

  const handleClick = (e) => {
    if (e.target.checked) {
      const findBebida = bebidas.find((item) => item.id === e.target.value);
      setSelected([...selected, findBebida]);
    } else {
      const filterDuplicado = selected.filter((el) => el.id !== e.target.value);
      setSelected(filterDuplicado);
    }
  };

  const handleSubmit = () => {
    const newArray = selected.map((item) => item.name);
    agregarDato(newArray, "bebidas");
    setStep(2);
  };

  const components = {
    1: (
      <>
        {bebidas?.map((item, key) => (
          <Container key={key} gap="1rem" borderBottom="1px solid #4A63604A">
            <Text width="90%" size="1.3rem" family="AlegreyaFont" align="start">
              {item.name}
            </Text>
            <input
              type="checkbox"
              value={item.id}
              onClick={handleClick}
              disabled={
                !selected.some((obj) => obj.id === item.id) &&
                selected.length === 2
              }
            />
          </Container>
        ))}
        {selected.length >= 1 && (
          <Button
            bg="white"
            shadow="0px 4px 4px #00000040"
            border="none"
            width="50%"
            padding=".5rem 1rem"
            radius="1rem"
            margin="auto"
            color="#81948B"
            display="flex"
            align="center"
            justify="center"
            gap=".5rem"
            weight="700"
            cursor="pointer"
            onClick={() => handleSubmit()}
          >
            CONFIRMAR <ButtonCheck />
          </Button>
        )}
      </>
    ),
    2: (
      <Container
        height="100%"
        flex="column"
        justify="center"
        align="center"
        gap="2rem"
        className="animate__animated animate__bounceIn"
      >
        <img src={check} style={{ width: "12rem" }} />
        <Text size="1.5rem" color="#4A6360">
          ¡Guardado con exito!
        </Text>
      </Container>
    ),
  };

  return (
    <MainModal className="animate__animated animate__fadeIn">
      <ButtonClose
        top="1rem"
        onClick={() => {
          change(false);
        }}
      >
        <X width="25" height="25" color="white" />
      </ButtonClose>
      <Container
        height="70%"
        width="80%"
        bg="white"
        radius=".5rem"
        flex="column"
        position="relative"
        justify="flex-start"
        gap="1.4rem"
        padding="2rem 1rem"
      >
        {step === 1 && (
          <Text Tcolor="#4A6360BF" family="BalooFont" size="1.5rem">
            Seleccionar 2 opciones
          </Text>
        )}
        {components[step]}
      </Container>
    </MainModal>
  );
}
