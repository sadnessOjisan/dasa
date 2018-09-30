import React from 'react';
import styled from 'styled-components'

const Font = (props) => {
    const {className, children, color} = props
    return (
        <StyledText className={className} color={color}>
          {children}
        </StyledText>)
}

const StyledText = styled.span`
  display: flex;
  color: ${props=>props.color}
`

export default Font