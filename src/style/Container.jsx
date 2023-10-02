import styled, { css, keyframes } from "styled-components";

const slideLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;
const slideRigth = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  position: ${({ position }) => position || null};
  top: ${({ top }) => top || null};
  bottom: ${({ bottom }) => bottom || null};
  right: ${({ right }) => right || null};
  left: ${({ left }) => left || null};
  width: ${({ width }) => width || null};
  min-width: ${({ minWidth }) => minWidth || null};
  max-width: ${({ maxWidth }) => maxWidth || null};
  max-height: ${({ maxHeight }) => maxHeight || null};
  height: ${({ height }) => height || null};
  min-height: ${({ minHeight }) => minHeight || null};
  min-height: ${({ maxHeight }) => maxHeight || null};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flex }) => flex || null};
  justify-content: ${({ justify }) => justify || null};
  align-items: ${({ align }) => align || null};
  align-content: ${({ content }) => content || null};
  gap: ${({ gap }) => gap || null};
  padding: ${({ padding }) => padding || null};
  overflow: ${({ overflow }) => overflow || null};
  overflow-y: ${({ overflowY }) => overflowY || null};
  overflow-x: ${({ overflowX }) => overflowX || null};
  background: ${({ bg }) => bg || null};
  border: ${({ border }) => border || null};
  border-bottom: ${({ borderBottom }) => borderBottom || null};
  border-top: ${({ borderTop }) => borderTop || null};
  border-left: ${({ borderLeft }) => borderLeft || null};
  border-right: ${({ borderRight }) => borderRight || null};
  border-radius: ${({ radius }) => radius || null};
  box-shadow: ${({ shadow }) => shadow || null};
  text-align: ${({ textAlign }) => textAlign || null};
  flex-wrap: ${({ wrap }) => wrap || null};
  flex-grow: ${({ grow }) => grow || null};
  color: ${({ color }) => color || null};
  background-size: ${({ bgSize }) => bgSize || null};
  background-color: ${({ bgColor }) => bgColor || null};
  background-position: ${({ bgPosition }) => bgPosition || null};
  background-repeat: ${({ bgRepeat }) => bgRepeat || null};
  background-image: ${({ bgImg }) => bgImg && `url('${bgImg}')`};
  background-attachment: ${({ bgAttachment }) => bgAttachment || null};
  background-position-x: ${({ positionX }) => positionX || null};
  inset: ${({ inset }) => inset || null};
  transform: ${({ transform }) => transform || null};
  margin: ${({ margin }) => margin || null};
  z-index: ${({ index }) => index || null};
  font-size: ${({ size }) => size || null};
  animation: ${({ animation }) =>
    animation &&
    css`
    .3s cubic-bezier(0.19, 0.78, 1, 1) 0s 1 
    `};
  > form {
    display: flex;
    height: ${({ formH }) => formH || null};
    flex-direction: column;
    gap: ${({ formGap }) => formGap || null};
  }

  ${({ scrollbar }) =>
    scrollbar &&
    `
  &::-webkit-scrollbar {
    width: 5px;
    height: 100px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    border-radius: 20px;
    margin: 3rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #d9d9d9;
  }`}
`;

export const Wrapper = styled.div`
  .BrainhubCarousel__dots .BrainhubCarousel__dot:before {
    background: white;
  }
`;

export const SideVector = styled.div`
  position: absolute;
  top: ${({ top }) => top || null};
  bottom: ${({ bottom }) => bottom || null};
  right: ${({ right }) => right || null};
  left: ${({ left }) => left || null};
  width: ${({ width }) => width || null};
  transform: ${({ transform }) => transform || null};

  z-index: 2;
  animation: ${({ direction }) =>
      direction === "left" ? slideLeft : slideRigth}
    1s ease-in-out; /* Transición para mostrar/ocultar */
`;
