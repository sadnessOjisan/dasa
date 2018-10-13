import React from "react";
import styled from "styled-components";

const Font = props => {
  const { className, children, color, size } = props;
  return (
    <StyledText className={className} color={color} size={size}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.span`
  display: flex;
  color: ${props => (props.color ? props.color : "black")};
  font-size: ${props => (props.size ? props.size : 16)}px;
`;

export default Font;
