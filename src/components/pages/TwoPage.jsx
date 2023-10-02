import React from "react";
import Anillo from "../../style/assets/Anillo";
import CountdownTimer from "../../style/assets/CountDown";
import Liston from "../../style/assets/Liston";
import Corazon from "../../style/assets/Corazon";
import { Container } from "../../style/Container";
import { Text } from "../../style/Text";
import { Button } from "../../style/Buttons";
import apiCalendar from "../../config/calendar";

export default function TwoPage({ change, error }) {
  const data = [
    { title: "Día", label: "Sábado 18 de Noviembre", button: "AGENDAR" },
    {
      title: "Lugar",
      label: "Quinta el Rincon de Tortuguitas",
      type: "modal",
      button: "CONFIRMAR ASISTENCIA",
    },
    {
      title: "Dirección",
      label: "Congreso 2565, Jose C. Paz",
      type: "map",
      button: "¿COMO LLEGAR?",
    },
  ];

  const handleClick = async () => {
    const event = {
      summary: "Casamiento Cris & Flor",
      start: {
        dateTime: new Date("2023-11-18T21:00:00Z").toISOString(),
        timeZone: "America/Buenos_Aires",
      },
      end: {
        dateTime: new Date("2023-11-19T08:00:00Z").toISOString(),
        timeZone: "America/Buenos_Aires",
      },
    };

    try {
      const api = await apiCalendar();
      console.log("CALENDAR ->", api);
      const { result } = await api.createEvent(event);
      if (result?.status === "confirmed") {
        change({ view: true, type: "confirm" });
      }
    } catch (_error) {
      console.log(_error);
      error({
        view: true,
        msg: "Debes iniciar sesión para agendar el evento.",
      });
    }
  };
  return (
    <Container
      width="100%"
      height="115ch"
      flex="column"
      justify="center"
      align="center"
      bgColor="#FFDFB9"
      transform="translate(0, -2.5rem)"
      radius="2rem 2rem 0 0"
      gap="1rem"
      position="relative"
      zIndex="3"
    >
      <CountdownTimer />

      <Container flex="column" align="center" width="80%" id="two">
        <Anillo />
        <Liston text="Los esperamos" size="2rem" />
        <Container flex="column" gap="1rem">
          {data.map((item, idx) => (
            <Container flex="column" key={idx} gap=".5rem" align="center">
              <Text family="BalooFont" color="#4A6360" size="1.2rem">
                {item.title}
              </Text>
              <Text family="AlegreyaFont" color="#4A6360" size="1.2rem">
                {item.label}
              </Text>
              <Button
                width="100%"
                family="AlegreyaFont"
                border="none"
                radius="3rem"
                padding=".5rem 1rem"
                size="1rem"
                color="#D28A58"
                onClick={() =>
                  item?.type
                    ? change({ view: true, type: item.type })
                    : handleClick()
                }
              >
                {item.button}
              </Button>
            </Container>
          ))}
          <Container flex="column" gap=".25rem">
            <Text family="BalooFont" color="#4A6360" size="1.2rem">
              Horarios
            </Text>
            <Container flex="column">
              <Text family="AlegreyaFont" color="#4A6360" size="1.2rem">
                CEREMONIA 18.00HS
              </Text>
              <Text family="AlegreyaFont" color="#4A6360" size="1.2rem">
                FIESTA 20.00HS
              </Text>
            </Container>
          </Container>
        </Container>
      </Container>
      <Corazon color="#C18559" />
    </Container>
  );
}
