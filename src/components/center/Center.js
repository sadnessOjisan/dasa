import React from 'react';
import styled from 'styled-components';

const Center = (props) => {
    const {className, children, vertical, horizontal} = props
    return (
        <Wrapper className={className} horizontal={horizontal === false} vertical={vertical === false}>
          {children}
        </Wrapper>)
}

const Wrapper = styled.div`
  display: flex;
  align-items: ${props => props.vertical && 'center'}; 
  justify-content: ${props => props.horizontal && 'center'}; 
`

export default Center