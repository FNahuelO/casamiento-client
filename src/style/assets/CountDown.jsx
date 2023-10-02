import React, { useState, useEffect } from "react";
import { Container } from "../Container";
import { Text } from "../Text";
import Corazon from "./Corazon";
import vector from "./flores.svg";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = new Date("2023-11-18") - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleComponents = (key, idx) => {
    const value = String(timeLeft[key]);

    return (
      <Container
        flex="column"
        gap=".5rem"
        padding="0 1rem"
        borderRight={idx < 3 ? "1px solid rgba(0, 0, 0, 0.3)" : null}
      >
        <Text family="BalooFont" color="#D28A58" size="1.5rem">
          {value.length === 1 ? `0${value}` : value}
        </Text>
        <Text family="AlegreyaFont" weight="700" size="1rem">
          {key}
        </Text>
      </Container>
    );
  };

  return (
    <Container
      bgImg={vector}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      width="20rem"
      height="20rem"
      align="center"
      justify="center"
    >
      <Container
        width="16rem"
        height="16rem"
        flex="column"
        align="center"
        justify="center"
        radius="50%"
        bg="white"
      >
        <Text color="#D28A58" size="2.5rem">
          Falta
        </Text>
        <Container padding="1rem 0 2rem 0">
          {Object.keys(timeLeft).map((key, idx) => handleComponents(key, idx))}
        </Container>
        <Corazon />
      </Container>
    </Container>
  );
};

export default CountdownTimer;
