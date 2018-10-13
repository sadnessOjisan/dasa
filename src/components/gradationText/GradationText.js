
import React from 'react';
import styled, {keyframes}  from 'styled-components'

const GradationText = (props) => {
    const {className, children, colorArray, isAnimate, fontSize} = props
    return (
        <StyledText className={className} colorArray={colorArray} isAnimate={isAnimate} fontSize={fontSize}>
          {children}
        </StyledText>)
}

const StyledText = styled.span`
background: -webkit-linear-gradient(0deg, ${props=>props.colorArray[0]}, ${props=>props.colorArray[1]}, ${props=>props.colorArray[2]});
-webkit-background-clip: text;
background-size: 200% auto;
-webkit-text-fill-color: transparent;
animation: ${props => props.isAnimate && `${move} 1s linear infinite reverse`};
font-size: ${props => props.fontSize? props.fontSize : 16}px;
`

const move = keyframes`
to {
  background-position: 200% center;
}
`;

export default GradationText;