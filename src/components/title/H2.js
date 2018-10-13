import React from "react";
import styled from "styled-components";
import { fontSize } from "../../constants/size";
import Color from "../color";

const DEFAULT_COLOR = Color.Pastel.white;

const H2 = props => {
  const { className, children, color, backgroundColor, isDivide } = props;
  const size = fontSize.large;
  return (
    <StyledText
      className={className}
      color={color}
      backgroundColor={backgroundColor}
      size={size}
      isDivide={isDivide}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.span`
  display: flex;
  background-color: ${props => props.backgroundColor};
  color: ${props => (props.color ? props.color : DEFAULT_COLOR)};
  font-size: ${props => props.size}px;
  padding: 4px 8px;
`;

export default H2;
