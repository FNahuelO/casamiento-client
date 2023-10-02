import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { fetchInvitados } from "../../helpers";
import IconCheck from "../../style/assets/IconCheck";
import X from "../../style/assets/X";
import { Container } from "../../style/Container";
import { Text } from "../../style/Text";

export default function Master() {
  const [list, setList] = useState(null);
  const [loading, setView] = useState({ view: false, first: true });
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchInvitados().then((response) => setList(response));
  }, []);

  const handleChange = (e) => {
    setView({ view: false, first: false });
    setTimeout(() => {
      setView({ view: true });
    }, 1000);
    const invitadoFind = list.find((item) => item.id === e.target.value);
    setSelected(invitadoFind);
  };

  const handleAssist = (assist) => {
    if (assist === null) return "No se registra información";
    if (assist) {
      return <IconCheck width="30" height="30" />;
    } else {
      return <X />;
    }
  };

  return (
    <Container
      bg="rgb(255, 223, 185)"
      flex="column"
      align="center"
      justify="center"
      width="100%"
      height="100vh"
      gap="2rem"
    >
      <Container flex="column" gap="1rem" justify="center">
        <Text size="2rem" family="AlegreyaFont">
          Lista de invitados
        </Text>
        <select
          onChange={handleChange}
          style={{
            border: "none",
            outline: "none",
            padding: "1rem",
            borderRadius: "3rem",
          }}
        >
          <option hidden>Seleccionar invitado</option>
          {list?.map((item, idx) => (
            <option key={idx} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </Container>
      {loading.view ? (
        <Container border="1px solid" width="90%">
          <Container flex="column">
            {["Bebidas", "Música", "Asistir"].map((item, idx) => (
              <Text padding="1rem" key={idx}>
                {item}
              </Text>
            ))}
          </Container>
          <Container flex="column" width="70%" gap=".5rem">
            <Container padding="1rem">
              {selected?.bebida?.length ? (
                <select
                  style={{
                    border: "none",
                    background: "none",
                    outline: "none",
                    width: "100%",
                  }}
                >
                  {selected?.bebida?.map((item, idx) => (
                    <option key={idx}>{item}</option>
                  ))}
                </select>
              ) : (
                <Text>No se registra información</Text>
              )}
            </Container>
            <Container padding="1rem">
              {selected?.music?.length ? (
                <select
                  style={{
                    border: "none",
                    background: "none",
                    outline: "none",
                    width: "100%",
                  }}
                >
                  {selected?.music?.map((item, idx) => (
                    <option key={idx}>{item}</option>
                  ))}
                </select>
              ) : (
                <Text>No se registra información</Text>
              )}
            </Container>
            <Container width="100%" justify="center">
              <Text padding="1rem">{handleAssist(selected?.assist)}</Text>
            </Container>
          </Container>
        </Container>
      ) : (
        !loading.first && <ClipLoader />
      )}
    </Container>
  );
}
