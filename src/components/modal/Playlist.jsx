import React, { useState } from "react";
import { searchYouTube } from "../../helpers/actions";
import { useDataStore } from "../../helpers/context";
import ButtonCheck from "../../style/assets/ButtonCheck";
import VectorSearch from "../../style/assets/Search";
import VectorCheck from "../../style/assets/VectorCheck";
import X from "../../style/assets/X";
import { Button, ButtonClose } from "../../style/Buttons";
import { Container } from "../../style/Container";
import { MainModal } from "../../style/Main";
import { Text } from "../../style/Text";

export default function Playlist({ change }) {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState([]);
  const [isChecked, setIsChecked] = useState({});
  const { agregarDato } = useDataStore();

  const handleSearch = async (value) => {
    const data = await searchYouTube(value);
    setList(data);
  };

  const handleClick = (item) => {
    const updatedIsChecked = { ...isChecked };

    if (item.etag in updatedIsChecked && updatedIsChecked[item.etag]) {
      updatedIsChecked[item.etag] = false;
      const current = selected.filter((element) => element.etag !== item.etag);
      setSelected(current);
    } else {
      setSelected([...selected, item]);
      updatedIsChecked[item.etag] = true;
    }

    setIsChecked(updatedIsChecked);
  };

  const handleSubmit = () => {
    const newArray = selected.map((item) => item.snippet.title);

    agregarDato(newArray, "musica");
    setStep(2);
  };

  const components = {
    1: (
      <>
        <Text padding=".5rem 0">Max 3 canciones</Text>
        <Container
          width="80%"
          padding=".5rem 1rem"
          radius="3rem"
          margin="0 auto"
          shadow="0px 4px 4px #00000040"
        >
          <input
            style={{
              width: "90%",
              appearance: "none",
              border: "none",
              fontSize: "1rem",
              outline: "none",
            }}
            placeholder="Buscar..."
            onChange={({ target: { value } }) => setText(value)}
          />
          <Button
            border="none"
            bg="none"
            type="submit"
            onClick={() => handleSearch(text)}
          >
            <VectorSearch />
          </Button>
        </Container>
        <Container
          flex="column"
          gap="1rem"
          overflowY="scroll"
          height="40%"
          padding="1rem 0"
        >
          {list?.map((item, idx) => (
            <Container key={idx} padding="0 1rem" align="center" gap="1rem">
              <img
                src={item.snippet.thumbnails.default.url}
                style={{ width: "20%", borderRadius: ".5rem" }}
              />
              <Text align="start" size=".8rem" width="60%">
                {item.snippet.title}
              </Text>
              <input
                type="radio"
                disabled={selected.length === 3}
                checked={isChecked[item.etag]}
                onClick={() => handleClick(item)}
              />
            </Container>
          ))}
        </Container>
        <Container flex="column" gap=".5rem" align="center">
          {selected?.map((item, idx) => (
            <Container key={idx} gap=".5rem" padding="0 .5rem" align="center">
              <Text>●</Text>
              <Text
                display="flex"
                width="85%"
                alignItems="center"
                align="start"
              >
                {item.snippet.title}
              </Text>
              <Button
                border="none"
                bg="none"
                color="gray"
                onClick={() => handleClick(item)}
              >
                x
              </Button>
            </Container>
          ))}
        </Container>
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
        <VectorCheck color="#4A6360EB" />
        <Text size="1.5rem">¡Guardado con exito!</Text>
      </Container>
    ),
  };

  return (
    <MainModal>
      <ButtonClose
        top=".5rem"
        onClick={() => {
          change(false);
        }}
      >
        <X width="25" height="25" color="white" />
      </ButtonClose>
      <Container
        height="85%"
        width="90%"
        bg="white"
        radius=".5rem"
        flex="column"
        position="relative"
      >
        {components[step]}
      </Container>
    </MainModal>
  );
}
