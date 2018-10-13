
import React from 'react';
import styled from 'styled-components'

const GradationText = (props) => {
    const {className, children, colorArray} = props
    return (
        <StyledText className={className} colorArray={colorArray}>
          {children}
        </StyledText>)
}

const StyledText = styled.span`
color: #FF8C00;
background: -webkit-linear-gradient(0deg, ${props=>props.colorArray[0]}, ${props=>props.colorArray[1]}, ${props=>props.colorArray[2]});
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export default GradationText;