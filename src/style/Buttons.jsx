import styled from "styled-components";

export const Button = styled.button`
  position: ${({ position }) => position || null};
  top: ${({ top }) => top || null};
  bottom: ${({ bottom }) => bottom || null};
  right: ${({ right }) => right || null};
  left: ${({ left }) => left || null};
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  display: ${({ display }) => display || null};
  flex-direction: ${({ flex }) => flex || null};
  justify-content: ${({ justify }) => justify || null};
  align-items: ${({ align }) => align || null};
  align-content: ${({ content }) => content || null};
  gap: ${({ gap }) => gap || null};
  padding: ${({ padding }) => padding || null};
  background: ${({ bg }) => bg || null};
  border: ${({ border }) => border || null};
  border-bottom: ${({ borderBottom }) => borderBottom || null};
  border-top: ${({ borderTop }) => borderTop || null};
  border-left: ${({ borderLeft }) => borderLeft || null};
  border-right: ${({ borderRight }) => borderRight || null};
  border-radius: ${({ radius }) => radius || null};
  box-shadow: ${({ shadow }) => shadow || null};
  text-align: ${({ textAlign }) => textAlign || null};
  flex-wrap: ${({ wrap }) => wrap && "wrap"};
  color: ${({ color }) => color || null};
  transform: ${({ transform }) => transform || null};
  margin: ${({ margin }) => margin || null};
  z-index: ${({ index }) => index || null};
  font-size: ${({ size }) => size || "1rem"};
  cursor: ${({ cursor }) => cursor || null};
  font-weight: ${({ weight }) => weight || null};
  font-family: ${({ family }) => family || null};
`;

export const ButtonPrimary = styled.button`
  position: ${({ position }) => position || null};
  top: ${({ top }) => top || null};
  bottom: ${({ bottom }) => bottom || null};
  right: ${({ right }) => right || null};
  left: ${({ left }) => left || null};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || null};
  background: ${({ bg }) => bg || "#5899EE"};
  color: ${({ color }) => color || "#fde8e8"};
  font-size: ${({ size }) => size || "1rem"};
  font-weight: ${({ weight }) => weight || "700"};
  display: flex;
  gap: ${({ gap }) => gap || ".5rem"};
  border-radius: ${({ radius }) => radius || "1.5rem"};
  padding: ${({ padding }) => padding || "0.9rem"};
  opacity: ${({ opacity }) => opacity || null};
  border: none;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  justify-content: center;
  box-shadow: ${({ shadow }) => shadow || null};
  border-top-left-radius: ${({ topLeft }) => topLeft || null};
  border-bottom-left-radius: ${({ bottomLeft }) => bottomLeft || null};
  ${({ hover, hoverColor }) =>
    hover &&
    `&:hover {
    background: ${hoverColor};;
    border-color: ${hoverColor};

  }`}
`;

export const ButtonSecondary = styled.button`
  width: ${({ width }) => width || "100%"};
  display: ${({ display }) => display || null};
  gap: ${({ gap }) => gap || null};
  align-items: ${({ align }) => align || null};
  justify-content: ${({ justify }) => justify || null};
  border-radius: 3rem;
  padding: 0.9rem;
  border: 1px solid;
  border-width: 0.2rem;
  border-color: #000;
  font-weight: 700;
  font-size: ${({ size }) => size || "1rem"};
  font-weight: ${({ weight }) => weight || null};
  background-color: ${({ bgColor }) => bgColor || "#fff"};
  color: ${({ color }) => color || "#3D3D3D"};
  cursor: pointer;
  box-shadow: ${({ shadow }) => shadow || null};
  ${({ hover }) =>
    hover &&
    `  &:hover {
    border: 0.2rem solid #f16363;
  }`}
`;

export const ButtonBorder = styled.button`
  width: ${({ width }) => width || "100%"};
  border-radius: 10rem;
  padding: ${({ padding }) => padding || "0.9rem"};
  display: ${({ display }) => display || null};
  justify-content: ${({ justify }) => justify || null};
  align-items: ${({ align }) => align || null};
  font-size: ${({ size }) => size || "1rem"};
  font-weight: 700;
  border: ${({ bg, color }) =>
    bg === "transparent" ? `1px solid ${color}` : "none"};
  cursor: pointer;
  color: ${(props) => (props.bg === "transparent" ? props.color : "white")};
  background: ${(props) =>
    props.bg === "transparent" ? "transparent" : props.bg};
  ${({ hover, hoverColor }) =>
    hover &&
    `
  &:hover {
    background: #fff;
    border-color: ${hoverColor}
  }`}
`;

export const ButtonLogout = styled.button`
  width: max-content;
  height: max-content;
  border: none;
  background: none;
  color: #1020b7;
  font-weight: 600;
  display: flex;
  font-size: 1.1rem;
  gap: 0.7rem;
  align-items: center;
  cursor: pointer;
  margin: ${({ margin }) => margin || ".5rem 0"};
`;

export const ButtonSvg = styled.button`
  color: #323232;
  width: 0.5rem;
  border: none;
  background: none;
  text-align: center;
  cursor: ${(cursor) => cursor || null};
`;

export const ButtonCites = styled.button`
  background: ${({ bg }) => bg};
  width: ${({ width }) => width || null};
  color: ${({ color }) => color || "#FDE8E8"};
  padding: ${({ padding }) => padding || "2.2% 3%"};
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  opacity: ${({ opacity }) => opacity || null};
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: ${({ rigth }) => rigth || "1rem"};
  left: ${({ left }) => left || null};
  top: ${({ top }) => top || "1rem"};
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
`;

export const FixedButton = styled.button`
  position: ${({ position }) => position || null};
  top: ${({ top }) => top || null};
  bottom: ${({ bottom }) => bottom || null};
  right: ${({ right }) => right || null};
  left: ${({ left }) => left || null};
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  border-radius: ${({ radius }) => radius || null};
  background-color: ${({ bg }) => bg || null};
  padding: ${({ padding }) => padding || null};
  opacity: ${({ opacity }) => opacity || null};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  cursor: pointer;
  transition: width 0.3s ease; /* Animación de expansión en hover */
`;
