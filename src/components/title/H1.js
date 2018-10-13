import React from "react";
import styled from "styled-components";
import { fontSize } from "../../constants/size";

const H1 = props => {
  const { className, children, background } = props;
  const size = fontSize.xlarge;
  return (
    <StyledText className={className} background={background} size={size}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.span`
  display: flex;
  background-color: ${props => props.background};
  color: white;
  font-size: ${props => props.size};
`;

export default H1;
