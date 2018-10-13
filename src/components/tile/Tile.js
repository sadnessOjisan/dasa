import React from 'react';
import styled from 'styled-components';

const BackgroundTile = (props) => {
    const {className, children, image, isGlobal} = props; 
    return (
        <Background className={className} image={image} isGlobal={isGlobal} >
          {children}
        </Background>)
}

const Background = styled.div`
background-repeat: repeat;
background-image: url(${props => props.image});
height: 100%;
width: 100%;
min-height: ${props => props.isGlobal && '100vh'};
`

export default BackgroundTile