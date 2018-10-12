import React from 'react';
import styled, {keyframes} from 'styled-components';

const Nobr = (props) => {
    const {className, children, forcePre} = props
    return (
        <Wrapper className={className} forcePre={forcePre} >
          {children}
        </Wrapper>)
}


const Wrapper = styled.div`
white-space: ${props=>props.forcePre? 'pre':'nowrap'};
`

export default Nobr