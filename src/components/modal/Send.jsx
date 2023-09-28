import React, { useState } from "react";
import { postInvitacion } from "../../helpers/actions";
import { useDataStore } from "../../helpers/context";
import ButtonCheck from "../../style/assets/ButtonCheck";
import ThankYou from "../../style/assets/ThankYou";
import X from "../../style/assets/X";
import { Button, ButtonClose } from "../../style/Buttons";
import { Container } from "../../style/Container";
import { MainModal } from "../../style/Main";
import { Text, Title } from "../../style/Text";

export default function Send({ datos, close }) {
  const [type, setType] = useState("default");
  const { allDelete } = useDataStore();

  const assist = datos?.invitado?.assist === "true";
  const components = {
    default: (
      <>
        <Title size="1.5rem" weight="700" color="#4A6360">
          Confirmar datos
        </Title>
        <Container flex="column" gap="2rem">
          <Container gap="1rem" justify="space-between" padding="0 1rem">
            <Text size="1.2rem" weight="700" color="#4A6360">
              Invitado:
            </Text>
            <Text size="1.2rem">{datos?.invitado?.name}</Text>
          </Container>
          <Container
            gap="1rem"
            align="center"
            justify="space-between"
            padding="0 1rem"
          >
            <Text size="1.2rem" weight="700" color="#4A6360">
              Asistira:
            </Text>
            <Text size="1.2rem">{assist ? "Si, confirmo" : "No puedo"}</Text>
          </Container>
          {assist && (
            <>
              <Container
                gap="1rem"
                align="center"
                justify="space-between"
                padding="0 1rem"
              >
                <Text size="1.2rem" weight="700" color="#4A6360">
                  Bebidas:
                </Text>
                <Container gap=".5rem">
                  <Text size="1.2rem">{datos?.bebidas[0]} </Text>
                  {datos?.bebidas[1] && (
                    <Text size="1.2rem">y {datos?.bebidas[0]}</Text>
                  )}
                </Container>
              </Container>
              <Container gap="1rem" justify="space-between" padding="0 1rem">
                <Text size="1.2rem" weight="700" color="#4A6360">
                  Musica:
                </Text>
                <select
                  style={{ width: "70%", border: "none", outline: "none" }}
                >
                  {datos?.musica.map((item, idx) => (
                    <option size="1.2rem" key={idx}>
                      {item}
                    </option>
                  ))}
                </select>
              </Container>
            </>
          )}
        </Container>
        <Button
          bg="white"
          justify="center"
          shadow="0px 4px 4px #00000040"
          border="none"
          width="50%"
          padding=".5rem 1rem"
          radius="1rem"
          margin="auto"
          color="#81948B"
          display="flex"
          align="center"
          gap=".5rem"
          weight="700"
          cursor="pointer"
          onClick={() => handleSubmit()}
        >
          ENVIAR <ButtonCheck />
        </Button>
      </>
    ),
    confirm: (
      <Container
        position="relative"
        gap="1rem"
        height="100%"
        align="center"
        justify="center"
        className="animate__animated animate__bounceIn"
      >
        <ThankYou width="200" />
      </Container>
    ),
  };

  const handleSubmit = async () => {
    const { success } = await postInvitacion(datos);
    if (success) {
      setType("confirm");
      allDelete();
    }
  };

  return (
    <MainModal>
      <Container
        position="relative"
        width="75%"
        height={datos?.invitado?.assist === "false" ? "15rem" : "25rem"}
        padding="3.5rem 2rem"
        bg="white"
        flex="column"
        align="center"
        gap="2rem"
        radius="1rem"
        textAlign="center"
        className="modal"
      >
        <ButtonClose rigth="1rem" onClick={() => close(false)}>
          <X />
        </ButtonClose>
        {components[type]}
      </Container>
    </MainModal>
  );
}
