import React from 'react';
import styled, {keyframes} from 'styled-components';

const Marquee = (props) => {
    const {className, children} = props
    return (
        <Wrapper className={className} >
          {children}
        </Wrapper>)
}

const Move = keyframes`
position: absolute;
  0% {
    position: absolute;
    left: 0%;
  }

  75% {
    position: absolute;
    left:100%;
  }
`;

const Wrapper = styled.div`
animation: ${Move} 10s infinite linear;
> * {
    position: absolute;
}
display: flex;
width: 100%;
`

export default Marquee