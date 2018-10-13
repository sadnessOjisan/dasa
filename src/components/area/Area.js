import React from "react";
import styled from "styled-components";

const Area = props => {
  const { className, children, width, height, backgroundColor, space } = props;
  return (
    <Wrapper
      className={className}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      space={space}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.space && `${props.space}px`};
`;

export default Area;
