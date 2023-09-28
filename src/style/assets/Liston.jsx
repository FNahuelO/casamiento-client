import React from "react";
import { Container } from "../Container";
import { Text } from "../Text";

export default function Liston({ text, size }) {
  return (
    <Container position="relative" justify="center" align="center">
      <svg
        width="250"
        height="70"
        viewBox="0 0 287 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="21.6389"
          y="10.25"
          width="244.861"
          height="54.6667"
          fill="#D28A58"
        />
        <path
          d="M21.6389 34.1665L39.3924 64.9165H3.8854L21.6389 34.1665Z"
          fill="#D28A58"
        />
        <path
          d="M20.5 41L2.74649 10.25L38.2535 10.25L20.5 41Z"
          fill="#D28A58"
        />
        <path
          d="M266.5 34.1665L284.254 64.9165H248.746L266.5 34.1665Z"
          fill="#D28A58"
        />
        <path
          d="M265.361 41L247.608 10.25L283.115 10.25L265.361 41Z"
          fill="#D28A58"
        />
      </svg>
      <Text position="absolute" family="MontezFont" color="white" size={size}>
        {text}
      </Text>
    </Container>
  );
}
