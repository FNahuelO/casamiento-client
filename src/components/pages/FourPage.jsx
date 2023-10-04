import React from "react";
import { Container } from "../../style/Container";
import { Text } from "../../style/Text";
import pic from "../../style/assets/picture.png";

export default function FourPage() {
  const links = [
    { href: "two", text: "CONFIRMAR ASISTENCIA" },
    { href: "two", text: "AGENDAR FIESTA" },
    { href: "music", text: "SUGERIR CANCIÓN" },
    { href: "drinks", text: "SUGERIR BEBIDA" },
  ];

  return (
    <Container
      height="100vh"
      flex="column"
      gap="2rem"
      justify="flex-end"
      align="center"
      bg="#FFCB9D"
    >
      <Container flex="column" gap="4rem" align="center">
        {links.map((title, idx) => (
          <>
            <a
              href={`#${title.href}`}
              key={idx}
              style={{ textDecoration: "none" }}
            >
              <Text
                textWrap="nowrap"
                weight="700"
                size="1.2rem"
                family="AlegreyaFont"
                color="white"
                spacing="3px"
                textShadow="0 2px 4px rgba(0, 0, 0, 0.5);"
              >
                {title.text}
              </Text>
            </a>
          </>
        ))}
      </Container>
      <img
        src={pic}
        style={{
          height: "20rem",
        }}
      />
    </Container>
  );
}
