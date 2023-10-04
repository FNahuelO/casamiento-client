import styled from "styled-components";

export const Title = styled.span`
  width: ${({ width }) => width || null};
  color: ${({ color }) => color || "black"};
  font-size: ${({ size }) => size || null};
  font-weight: ${({ weight }) => weight || null};
  margin: ${({ margin }) => margin || "0"};
  text-align: ${({ align }) => align || null};
  padding: ${({ padding }) => padding || null};

  @media (min-width: 1900px) {
    font-size: ${({ size }) => size?.lg || null};
  }
`;

export const Text = styled.span`
  position: ${({ position }) => position || null};
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  display: ${({ display }) => display || null};
  justify-content: ${({ justify }) => justify || null};
  align-items: ${({ alignItems }) => alignItems || null};
  color: ${({ color }) => color || "black"};
  background: ${({ bg }) => bg || null};
  border: ${({ border }) => border || null};
  border-radius: ${({ radius }) => radius || null};
  align-items: ${({ alignItems }) => alignItems || null};
  font-size: ${({ size }) => size || null};
  font-family: ${({ family }) => family || null};
  font-weight: ${({ weight }) => weight || null};
  line-height: ${({ line }) => line || null};
  padding: ${({ padding }) => padding || null};
  border-top-left-radius: ${({ topLeft }) => topLeft || null};
  border-bottom-left-radius: ${({ bottomLeft }) => bottomLeft || null};
  box-shadow: ${({ shadow }) => shadow || null};
  filter: ${({ filter }) => filter || null};
  cursor: ${({ cursor }) => cursor || null};
  gap: ${({ gap }) => gap || null};
  margin: ${({ margin }) => margin || "0"};
  text-align: ${({ align }) => align || null};
  text-decoration: ${({ decoration }) => decoration || null};
  letter-spacing: ${({ spacing }) => spacing || null};
  word-wrap: ${({ wrap }) => wrap || null};
  text-wrap: ${({ textWrap }) => textWrap || null};
  opacity: ${({ opacity }) => opacity || null};
  transform: ${({ transform }) => transform || null};
  text-shadow: ${({ textShadow }) => textShadow || null};
`;
export const Required = styled.span`
  width: ${({ width }) => width || null};
  color: ${({ color }) => color || "black"};
  font-size: ${({ size }) => size || null};
  font-weight: ${({ weight }) => weight || null};
  margin: ${({ margin }) => margin || "0"};
  text-align: ${({ align }) => align || null};

  @media (min-width: 1900px) {
    font-size: ${({ size }) => size?.lg || null};
  }
`;

export const HR = styled.hr`
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  color: ${({ color }) => color || "black"};
  font-size: ${({ size }) => size || null};
  border: ${({ border }) => border || null};
  margin: ${({ margin }) => margin || null};
  transform: ${({ transform }) => transform || null};
`;
