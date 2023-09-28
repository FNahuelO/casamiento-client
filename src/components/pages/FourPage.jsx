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
      height="35vh"
      justify="center"
      align="center"
      bg="white"
      radius="1rem 1rem 0rem 0rem"
    >
      <img
        src={pic}
        style={{
          height: "15rem",
        }}
      />
      <Container flex="column" gap="1.75rem" align="flex-end">
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
                size="1rem"
                family="AlegreyaFont"
                color="#C18559"
              >
                {title.text}
              </Text>
            </a>
          </>
        ))}
      </Container>
    </Container>
  );
}
