import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "44px"};
  padding: 12px 12px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-shrink: 0;
  font-size: "14px";
  font-weight: 600;
  border: 1px solid #b0cce3;
  border-radius: 12px;
  background: ${(props) => props.$background || "var(--header-gradient)"};
  color: ${(props) => props.color || "var(--active-blue)"};
  box-shadow: ${(props) => props.shadow || ""};
  transition: scale 350ms, background 350ms, box-shadow 350ms, color 350ms;
  &:hover,
  &:focus {
    scale: 0.9;
    background: ${(props) => props.hover || "var(--header-gradient)"};
    box-shadow: var(--btn-box-shadow-hover);
    color: var(--primary-white);
    cursor: pointer;
  }
`;
const Button = ({
  text,
  width,
  height,
  background,
  color,
  bShadow,
  bgHover,
  onClick
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      $background={background}
      color={color}
      shadow={bShadow}
      hover={bgHover}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
