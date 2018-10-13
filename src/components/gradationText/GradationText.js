
import React from 'react';
import styled from 'styled-components'

const GradationText = (props) => {
    const {className, children} = props
    return (
        <StyledText className={className}>
          {children}
        </StyledText>)
}

const StyledText = styled.span`
color: #FF8C00;
background: -webkit-linear-gradient(0deg, red, green, yellow);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export default GradationText;