import React from "react";
import styled, { keyframes } from "styled-components";

const Blink = props => {
  const { className, children, speed } = props;
  return (
    <Wrapper className={className} speed={speed}>
      {children}
    </Wrapper>
  );
};

const Blinker = keyframes`
  0% {
    opacity: 0;
  }

  75% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  animation: ${Blinker} ${props => (props.speed ? props.speed : 0.15)}s step-end
    infinite;
`;

export default Blink;
