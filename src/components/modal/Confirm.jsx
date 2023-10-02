import React, { useState, useEffect } from "react";
import { fetchInvitados } from "../../helpers";
import { useDataStore } from "../../helpers/context";
import { Button } from "../../style/Buttons";
import { Container } from "../../style/Container";
import { Text } from "../../style/Text";
import VectorCheck from "../../style/assets/VectorCheck";
import ButtonCheck from "../../style/assets/ButtonCheck";

export default function Confirm() {
  const [step, setStep] = useState(1);
  const [consulta, setConsulta] = useState("");
  const [view, setView] = useState(false);
  const [results, setResults] = useState([]);
  const [invitado, setInvitado] = useState(null);
  const [list, setList] = useState(null);
  const { agregarDato } = useDataStore();

  useEffect(() => {
    fetchInvitados().then((response) => setList(response));
  }, []);

  const handleChange = (e) => {
    const currentValue = e.target.value;
    setView(Boolean(currentValue.length));
    const consulta = currentValue.toLowerCase();
    setConsulta(consulta);

    const resultadosFiltrados = list?.filter((el) =>
      el?.name.toLowerCase().includes(consulta)
    );

    setResults(resultadosFiltrados);
  };
  const handleChangeRadio = (e) => {
    setInvitado({ ...invitado, assist: e.target.value });
  };

  const handleClick = (selected) => {
    if (selected?.assist !== null) return;
    if (invitado?.assist === null) {
      setInvitado({ ...invitado, ...selected });
    } else {
      setInvitado({ ...selected, assist: invitado?.assist || null });
    }
    setView(false);
    setConsulta(selected?.name);
  };
  function noTieneValoresNulos(objeto) {
    if (!objeto) {
      return false;
    }

    const propiedades = Object.keys(objeto);
    for (const propiedad of propiedades) {
      if (
        objeto[propiedad] === null ||
        objeto[propiedad] === undefined ||
        !objeto?.name
      ) {
        return false;
      }
    }
    return true;
  }

  const handleSubmit = () => {
    agregarDato(invitado, "invitado");
    setStep(2);
  };

  const components = {
    1: (
      <>
        <Text family="BalooFont" color="#4A625F" size="1.5rem">
          ¿Asistes a la fiesta?
        </Text>
        <Container gap="1rem">
          <Container gap=".5rem" align="center">
            <input
              type="radio"
              value={true}
              style={{ margin: 0, outline: "auto" }}
              name="confirm"
              onChange={handleChangeRadio}
            />
            <Text family="BalooFont" color="#4A6360E8" weight="400">
              ¡Si, confirmo!
            </Text>
          </Container>
          <Container gap=".5rem" align="center">
            <input
              type="radio"
              style={{ margin: 0, outline: "auto" }}
              name="confirm"
              value={false}
              onChange={handleChangeRadio}
            />
            <Text family="BalooFont" color="#4A6360E8" weight="400">
              No puedo
            </Text>
          </Container>
        </Container>
        <Container flex="column" gap=".5rem" width="90%">
          <Text family="BalooFont" color="#4A625F">
            Ingresa tu nombre
          </Text>
          <Container flex="column" position="relative" align="center">
            <input
              type="text"
              id="busqueda"
              value={consulta}
              onChange={handleChange}
              placeholder="Escribe tu nombre..."
              style={{
                border: "none",
                background: "none",
                textAlign: "center",
                outline: "none",
                touchAction: "manipulation",
              }}
            />
            {results.length > 0 && view ? (
              <Container
                position="absolute"
                gap=".5rem"
                flex="column"
                width="80%"
                top="2rem"
                height="max-content"
                maxHeight="11rem"
                bg="white"
                overflow="auto"
                scrollbar={true}
              >
                {results.map((resultado, index) => (
                  <>
                    <Text
                      color="black"
                      key={index}
                      disabled={resultado?.assist !== null && true}
                      opacity={resultado?.assist !== null ? "0.5" : "1"}
                      onClick={() => handleClick(resultado)}
                    >
                      {resultado?.name}
                    </Text>
                    <hr style={{ width: "99%" }} />
                  </>
                ))}
              </Container>
            ) : (
              view && <p>No se encontraron resultados.</p>
            )}
          </Container>
        </Container>
        {noTieneValoresNulos(invitado) && (
          <Button
            bg="white"
            shadow="0px 4px 4px #00000040"
            border="none"
            width="50%"
            padding=".5rem 1rem"
            radius="1rem"
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
        gap="1rem"
        className="animate__animated animate__bounceIn"
      >
        <VectorCheck color="#4A6360EB" />
        <Text size="1.5rem" color="#4A6360">
          ¡Guardado con exito!
        </Text>
      </Container>
    ),
  };

  return (
    <Container
      flex="column"
      radius="50%"
      width="20rem"
      height="20rem"
      bg="white"
      justify="center"
      align="center"
      gap="1.5rem"
    >
      {components[step]}
    </Container>
  );
}
