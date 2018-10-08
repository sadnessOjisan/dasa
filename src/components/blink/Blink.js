import React from 'react';
import styled, {keyframes} from 'styled-components';

const Blink = (props) => {
    const {className, children, vertical, horizontal} = props
    return (
        <Wrapper className={className} >
          {children}
        </Wrapper>)
}

const Blinker = keyframes`
  0% {
    opacity: 0;
  }

  75% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
animation: ${Blinker} 0.15s step-end infinite;
`

export default Blink